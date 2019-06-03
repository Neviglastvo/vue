<template>
  <Layout>
    <div class="book">
      <h2>
        <a :href="$page.bookEntry.url">{{ $page.bookEntry.title }}</a>
      </h2>

      <div>
          <div class="img-wrapper">
            <g-image  :src="$page.bookEntry.cover.large" />
          </div>
      </div>

      <div v-if="$page.bookEntry.numberOfPages">
        Number of pages: {{ $page.bookEntry.numberOfPages }}
      </div>

      <div v-if="$page.bookEntry.notes">
        <h4>Notes:</h4>
        <p>{{ $page.bookEntry.notes }}</p>
      </div>


      <div class="book-footer">
        <div>{{ $page.bookEntry.publishDate }}</div>
        <div>By <span v-html="$page.bookEntry.authors[0].name" /></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Book ($id: String!){
  bookEntry (id: $id) {
    id
    title
    authors {
      name
    },
    cover {
      large
    }
    url
    notes
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Details'
  }
}
</script>

<style>
.book {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 0 15px 20px;
  margin: 20px 5px;
}
.img-wrapper {
  text-align: center;
}
.book-footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
