/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
    return <style jsx global>{`
    body {
        background-color:  #f7f9fe;
        overflow-x: hidden;
    }

    // 公告栏中的字体固定白色
    #theme-heo #announcement-content .notion{
        color: white;
    }

    // 滚动栏颜色样式
    ::-webkit-scrollbar-thumb {
        background: rgba(93, 201, 211, 0.44);
        border-radius: 8px;
        cursor: pointer;
    }

    // 鼠标悬浮时滚动栏颜色
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(93, 201, 211);
    }

    ::-webkit-scrollbar {
        width: 12px;
        height: 8px;
    }

    .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);      
    }

    .recent-top-post-group::-webkit-scrollbar {
        display: none;
    }
    
    .scroll-hidden::-webkit-scrollbar {
        display: none;
    }

    * {
        box-sizing: border-box;
    }

    // 标签滚动动画
    .tags-group-wrapper {
        animation: rowup 60s linear infinite;
    }
    
    @keyframes rowup {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    }

  `}</style>
}

export { Style }
