const NavComponent = React.createClass({
    render: function() {
      return (
        <nav>
             <div className="navWide">
      <div className="wideDiv">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
    </div>
    <div className="navNarrow">
      <i className="fa fa-bars fa-2x"></i>
        <div className="narrowLinks">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
  </div>

        </nav>
      );
    }
  });

  burgerToggle: function() {
    let linksEl = document.querySelector('.narrowLinks');
  }

  burgerToggle: function() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
              linksEl.style.display = 'none';
          } else {
              linksEl.style.display = 'block';
          }
  }

  <a href="#" onClick={this.burgerToggle}>Link 1</a>
