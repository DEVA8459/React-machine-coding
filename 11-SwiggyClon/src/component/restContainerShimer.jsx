export const ContainerShimmer = () => {
  const ShimmerArr = new Array(16).fill(null);
  return (
    <div>
      <div className="carousel-container">
        <div className="header">xxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</div>
        <div className="carousel">
          <div className="carousel-inner">
            {ShimmerArr.map((_, index) => (
              <div key={index}>
                <div className="image">
                  <img />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="restaurant-container">
        <div className="header">xxxxxx xxxxxx xxxx</div>
        <div className="content">
          {ShimmerArr.map((_, index) => (
            <div key={index} className="card">
              <img className="card-image" />
              <div className="card-content">
                <h2>xxxxxxxxxxx</h2>
                <span>xxxxxx</span>
                <p>xxxxx</p>
                <p>xxxxx</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
