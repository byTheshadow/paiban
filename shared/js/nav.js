/* ========================================================
   快捷排版网站 —— by shadow | 全局导航组件
   ======================================================== */
(function () {
  // 判断当前页面处于哪一层级（主目录还是子目录）
  const isSubDir = window.location.pathname.includes('/forum/') ||
                   window.location.pathname.includes('/chat/') ||
                   window.location.pathname.includes('/databook/') ||
                   window.location.pathname.includes('/article/');

  const basePath = isSubDir ? '../' : './';
  const path = window.location.pathname;

  const links = [
    { title: '主站大厅', href: basePath + 'index.html', key: 'home', active: !isSubDir },
    { title: '论坛体', href: basePath + 'forum/index.html', key: 'forum', active: path.includes('/forum/') },
    { title: '手机聊天 (即将上线)', href: '#', key: 'chat', disabled: true },
    { title: '角色公式书 (即将上线)', href: '#', key: 'databook', disabled: true },
    { title: '长文精排 (即将上线)', href: '#', key: 'article', disabled: true },
  ];

  const navHtml = `
    <header class="site-header">
      <div class="site-header-inner">
        <a href="${basePath}index.html" class="site-brand">
          <span>快捷排版网站</span>
          <span class="brand-author">by shadow</span>
        </a>
        <nav class="site-nav">
          ${links.map(link => {
            if (link.disabled) {
              return `<span class="site-nav-link" style="opacity: 0.4; cursor: not-allowed;" title="正在制作中">${link.title}</span>`;
            }
            return `<a href="${link.href}" class="site-nav-link ${link.active ? 'active' : ''}">${link.title}</a>`;
          }).join('')}
        </nav>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHtml);
})();
