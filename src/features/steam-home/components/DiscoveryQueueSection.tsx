import type { DiscoveryQueueItem } from '../types';

type DiscoveryQueueSectionProps = {
  title: string;
  actionLabel: string;
  item: DiscoveryQueueItem;
};

export function DiscoveryQueueSection({
  title,
  actionLabel,
  item
}: DiscoveryQueueSectionProps) {
  return (
    <section className="home_ctn discovery_queue_ctn">
      <div className="home_page_content">
        <div className="discovery_queue_ctn__header">
          <h2 className="home_page_content_title">{title}</h2>
          <a className="section-link" href="#">
            {actionLabel}
          </a>
        </div>

        <div className="discovery_queue_static">
          <a className="discovery_queue_overlay" href="#" aria-label={item.title}>
            <div
              className="discovery_queue_overlay__hero"
              style={{ backgroundImage: `url(${item.hero})` }}
            />
            <div className="discovery_queue_overlay__content">
              <div className="discovery_queue_overlay__media" aria-hidden="true">
                {item.screenshots.map((shot) => (
                  <div
                    key={shot}
                    className="discovery_queue_overlay__shot"
                    style={{ backgroundImage: `url(${shot})` }}
                  />
                ))}
              </div>
              <div className="discovery_queue_overlay__copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="discovery_queue_overlay__actions">
                  <span className="discovery_queue_overlay__primary">{item.startLabel}</span>
                  <span className="discovery_queue_overlay__secondary">{item.secondaryLabel}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
