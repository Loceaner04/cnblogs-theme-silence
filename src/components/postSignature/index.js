import "./index.less";
import options from '@/consts/options';

function buildPostSignature() {
    const config = options.signature;
    if (config.enable) {
        const postUrl = $('#cb_post_title_url').attr('href');
        const authorName = config.author || $('#profile_block a').eq(0).html();
        const content =
            `<div class="esa-post-signature"> 
                        <p>作者：${authorName}</p> 
                        <p>出处：<a href="${postUrl}">${postUrl}</a></p> 
                        <p>版权：本文采用「<a href="${config.link}"  target="_blank">${config.license}</a>」知识共享许可协议进行许可。</p> 
                        <p>${config.remark || ''}</p> 
                    </div>`;

        $('#MySignature').html(content).show();
    }
}

export default buildPostSignature;