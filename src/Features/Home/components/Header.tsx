import { Header as HeaderType } from '../../../Models/LandingPageData';

interface HeaderProps {
  header: HeaderType;
}

export default function Header({ header }: HeaderProps) {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {header.title}
                  <span></span>
                </h1>
                <p>{header.paragraph}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
