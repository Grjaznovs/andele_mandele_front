<template>
  <div class="row">
    <spinner v-if="loading" variant="success" />
    <div v-else class="col-auto p-2" v-for="(contact) in list" :key="contact.id">
      <div class="card" style="width: 23rem;">
        <div class="card-header">
          {{ contact.name }}
        </div>
        <div class="card-body">
          <a @click="viewEvent(contact.id)" class="page-link" href>
            <img class="card-img-top" :src="contact.image">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./RickAndMortyIndex.js" />
