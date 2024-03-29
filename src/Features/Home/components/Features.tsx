import { Features as FeaturesType } from '../../../Models/LandingPageData';

interface FeaturesProps {
  features: FeaturesType[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {features.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
              {' '}
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
