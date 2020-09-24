<template>
  <div>
    <div v-for="item in project">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">{{ item.name }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Projekty</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Użytkownicy</a>
            </li>
          </ul>
          <span class="navbar-text">Navbar text with an inline element</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    project: {
      type: Array
    }
  }
}
</script>