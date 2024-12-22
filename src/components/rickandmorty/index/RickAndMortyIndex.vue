<template>
  <div class="row">
    <div class="col-auto p-2" v-for="(contact) in list" :key="contact.id">
      <div class="card" style="width: 23rem;">
        <div class="card-header">
          {{ contact.name }}
        </div>
        <div class="card-body">
          <a @click="showCharacter(contact.id)" class="page-link" href>
            <img
              class="card-img-top"
              alt="..."
              :src="contact.image"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./RickAndMortyIndex.js" />
