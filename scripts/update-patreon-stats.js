const fs = require('fs');
const path = require('path');

// 設定
const CAMPAIGN_ID = process.env.PATREON_CAMPAIGN_ID; // 後で取得してSecretsに設定
const ACCESS_TOKEN = process.env.PATREON_ACCESS_TOKEN;
const DATA_FILE = path.join(__dirname, '../data/stats.json');

async function main() {
    if (!ACCESS_TOKEN) {
        console.error('Error: PATREON_ACCESS_TOKEN is not set.');
        process.exit(1);
    }

    console.log('Fetching Patreon stats...');

    try {
        // 1. キャンペーンIDが未設定の場合、まずはキャンペーン一覧を取得してIDを特定する
        let campaignId = CAMPAIGN_ID;
        if (!campaignId) {
            console.log('Campaign ID not provided, fetching from API...');
            const campaignsRes = await fetch('https://www.patreon.com/api/oauth2/v2/campaigns', {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
            });

            if (!campaignsRes.ok) {
                throw new Error(`Failed to fetch campaigns: ${campaignsRes.status} ${campaignsRes.statusText}`);
            }

            const campaignsData = await campaignsRes.json();
            if (campaignsData.data && campaignsData.data.length > 0) {
                campaignId = campaignsData.data[0].id;
                console.log(`Found Campaign ID: ${campaignId}`);
            } else {
                throw new Error('No campaigns found for this user.');
            }
        }

        // 2. 投稿数を取得 (Paginationを考慮して全件取得しても良いが、APIによってはmetaデータでtotalがある場合も)
        // Public APIで単純なcount endpointはないため、postsをfetchして数えるのが確実。
        // ※注: 大量にある場合はPaginationが必要。ここでは簡易的に実装。
        // V2 API: GET /campaigns/{campaign_id}/posts

        // 残念ながらAPI v2のposts endpointには headerに 'Total-Count' のようなものはないことが多い。
        // しかし、プロフィールページなどのスクレイピングは規約違反のリスクがあるため、
        // ここでは「最新の投稿を取得」しつつ、本来はページネーションで全件取得すべきだが、
        // 簡易実装として「現在のstats.jsonの値」と「APIで取れた最新の数」を比較...はできない。
        // 正攻法：ページネーションで全件取得してカウントする。

        let totalPosts = 0;
        let nextLink = `https://www.patreon.com/api/oauth2/v2/campaigns/${campaignId}/posts?page[count]=100`;

        while (nextLink) {
            console.log(`Fetching posts from: ${nextLink}`);
            const postsRes = await fetch(nextLink, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
            });

            if (!postsRes.ok) {
                const errText = await postsRes.text();
                throw new Error(`Failed to fetch posts: ${postsRes.status} ${errText}`);
            }

            const postsData = await postsRes.json();
            totalPosts += postsData.data.length;

            if (postsData.meta && postsData.meta.pagination && postsData.meta.pagination.next) {
                nextLink = postsData.meta.pagination.next;
            } else {
                nextLink = null;
            }
        }

        console.log(`Total posts counted: ${totalPosts}`);

        // 3. stats.jsonを更新
        const newStats = {
            postCount: totalPosts,
            lastUpdated: new Date().toISOString()
        };

        // 既存のファイルを読んで、数が減っている場合（削除等）は更新しない、または更新する？
        // 基本的には更新する方針で。

        // ただし、0件だった場合はエラーの可能性もあるのでガード
        if (totalPosts > 0) {
            fs.writeFileSync(DATA_FILE, JSON.stringify(newStats, null, 2));
            console.log(`Successfully updated stats.json: ${totalPosts}`);
        } else {
            console.warn('Total posts is 0. Skipping update to avoid accidental reset.');
        }

    } catch (error) {
        console.error('Script failed:', error);
        process.exit(1);
    }
}

main();
