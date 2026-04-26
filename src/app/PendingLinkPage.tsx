import { getHomeHref } from './navigation';

export function PendingLinkPage() {
  return (
    <main className="pending-link-page shell">
      <div className="pending-link-page__panel">
        <p className="pending-link-page__eyebrow">Steam 首页占位跳转</p>
        <h1>链接占位页</h1>
        <p>当前首页跳转统一收口到这个固定页面。</p>
        <a className="pending-link-page__back" href={getHomeHref()}>
          返回首页
        </a>
      </div>
    </main>
  );
}
