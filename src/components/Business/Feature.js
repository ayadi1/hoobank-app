import './Feature.css';
export default function Feature({ icon, title, content }) {
  return (
    <div className="app__Feature feature-card">
      <div className="app__Feature-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="app__Feature-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
