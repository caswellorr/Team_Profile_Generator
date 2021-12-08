// ============ GENERATE HTML TEMPLATE FUNCTION ================

function generateHtmlTemplate({name, id, email, office, github, school}) {

  return `

  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
  
    <!-- Stylesheet -->
    <link rel="stylesheet" href="../dist/style.css">
  
  </head>
  
  <body>
  
    <!-- =========== HEADER ============ -->
  
    <header>
      <h1>My Team</h1>
    </header>
  
    <!-- ============ CARD ============ -->
  
    <main>
  
      <div class="card-pond">
        <section class="card">
          <article class="card-header">
            <h2>Name</h2>
            <h3><i class=""></i>Role</h3>
          </article>
          <article class="card-body">
            <ul class="card-list">
              <li class="card-list-item">ID</li>
              <li class="card-list-item">Email: <a href=""></a></li>
              <li class="card-list-item">Office/GitHub/School</li>
            </ul>
          </article>
        </section>
      </div>
  
  
    </main>
  
  </body>
  
  </html>
  
  
  `


};

module.exports = generateHtmlTemplate