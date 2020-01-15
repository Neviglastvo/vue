
<template>
  <Layout>
    <div class="builder">
      <div class="builder__container">
        <div class="builder__item builder__item--1">Name</div>
        <div class="builder__item builder__item--2">Score</div>
        <div class="builder__item builder__item--3">Price</div>
        <div class="builder__item builder__item--4">Motherboard</div>
        <div class="builder__item builder__item--5">Empty</div>
        <div class="builder__item builder__item--6">CPU</div>
        <div class="builder__item builder__item--7">CPU Cooler</div>
        <div class="builder__item builder__item--8">RAM</div>
        <div class="builder__item builder__item--9">Empty</div>
        <div class="builder__item builder__item--10">
          <div class="builder__subitem">SSD</div>
          <div class="builder__subitem">M2</div>
          <div class="builder__subitem">Empty</div>
          <div class="builder__subitem">Empty</div>
        </div>
        <div class="builder__item builder__item--11">VGA</div>
        <div class="builder__item builder__item--12">
          {{message}} <br>
          Motherboard

        </div>
        <div class="builder__item builder__item--13">Empty</div>
        <div class="builder__item builder__item--14">PSU</div>
        <div class="builder__item builder__item--15">Empty</div>
        <div class="builder__item builder__item--16">PCI-E</div>
        <div class="builder__item builder__item--17">PCI-E</div>
        <div class="builder__item builder__item--18">PCI-E</div>
        <div class="builder__item builder__item--19">PCI-E</div>
        <div class="builder__item builder__item--20">
          <div class="builder__subitem">FAN</div>
          <div class="builder__subitem">FAN</div>
          <div class="builder__subitem">FAN</div>
          <div class="builder__subitem">FAN</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  items: allPC (perPage: 1, page: $page) {
    edges {
      node {
        id
        title
        videocard
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Builder"
  },

  components: {
  },
  data: function() {
    return {
      message: 'Hello, first pick:',
      state: -1, //0, 1, 2, 3
      readyStatus: false,

      pc: {
        name: "",
        score: 0
      },

      pcLogs: []
    };
  },
  methods: {
    initAssemble() {
      let t = this;

      t.endGameStatus = false;
      t.message = "Game started";
      t.gameRunning = true;

      t.player.hpCurrent = t.player.hp;
      t.mob.hpCurrent = t.mob.hp;
      t.slayerLogs = [];
    },
  }
};
</script>

<style scoped>
.pcs {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.pc-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.5);
  padding: 0 15px 20px;
  margin: 20px 5px;
  width: 50%;
  color: #000;
}

.pc-card a {
  color: #000;
}
.img-wrapper {
  width: 100%;
  text-align: center;
}
.img-wrapper img {
  height: 200px;
}
.pc-footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
</style>
