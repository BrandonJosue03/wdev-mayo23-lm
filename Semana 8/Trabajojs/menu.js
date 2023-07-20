menuprincipal.innerHTML += `
<nav class="navbar navbar-expand-xxl navbar-dark bg-dark">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
    aria-expanded="false" aria-label="Toggle navigation"></button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
            <a class="nav-link active" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="https://paginas-web-cr.com/ApiPHP" target="_blank" aria-current="page">Api <span class="visually-hidden">(current)</span></a>
        </li>                
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="listarcurso.html">Listar Curso</a>
                <a class="dropdown-item" href="#">Action 2</a>
            </div>
        </li>
    </ul>
</div>
</nav>`;