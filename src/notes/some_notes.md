# the following cut away from app.js

<Route
  exact
  path='/:category'
  render={({match}) => (
    <div>
      <Categories
        category={match.params.category}/>
        {/* underline the selected category */}
      <Posts
        category={match.params.category}/>
        {/* show posts for this category only */}
    </div>
  )}/>

<Route
  exact
  path='/'
  render={() => (
    <div>
      <Categories
        category=''/>
        {/* don't underline any category */}
      <Posts
        category=''/>
        {/* show posts from all categories */}
    </div>
  )}/>
