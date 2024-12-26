<template>
  <div class="container mt-5">
    <spinner v-if="loading" variant="success" />
    <div v-else class="card mb-3 col-12 bg-light bg-opacity-75">
      <div class="row g-0">
        <div class="col-4">
          <img class="img-fluid rounded-start" :src="editEl.image">
        </div>

        <div class="col-8">
          <div class="card-body">
            <h4 class="card-title">
              <a :href="editEl.url" class="nav-link mb-2" target="_blank">{{ editEl.name }}</a>
            </h4>
            <div class="col-12 mb-2">
              <span
                class="badge rounded-pill"
                :class="[
                  'badge rounded-pill',
                  {
                    'bg-danger': editEl.status === 'Dead',
                    'bg-success': editEl.status === 'Alive'
                  }
                ]"
              >
                &nbsp;
              </span>
              {{ editEl.status }} - {{ editEl.species }}
            </div>

            <div class="text-muted mb-2">Gender: {{ editEl.gender }}</div>

            <div class="text-muted">Last known location:</div>
            <a :href="editEl.location.url" class="nav-link mb-2" target="_blank">{{ editEl.location.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./RickAndMortyShow.js" />
