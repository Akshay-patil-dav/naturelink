interface PageHeaderProps {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header id="peanut-page-header" style={{padding:"150px"}}>
      <div className="peanut-header-content">
        <div className="peanut-logo-wrapper">
          <i className="bi bi-droplet-fill peanut-logo-icon" />
          <span className="peanut-brand-name">Golden Harvest</span>
        </div>
        <h1 id="peanut-main-title">
          {title}
        </h1>
        <p className="peanut-subtitle">
          {subtitle}
        </p>
      </div>
    </header>
  )
}
