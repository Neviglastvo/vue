<template>
  <Layout>
    <div class="slayer">
      <div class="slayer__popup" v-if="endGameStatus">
        <div class="slayer__popup-title">You {{gameResult}}</div>
        <button class="slayer__btn slayer__btn--heal" @click="initGame()">Restart</button>
      </div>

      <div class="slayer__row">
        <div class="slayer__row-title">{{ message }}</div>
      </div>
      <div class="slayer__row">
        <div class="slayer__col">
          <div class="slayer__name">{{player.name}} (STR:{{player.str}}, INT:{{player.int}}, weapon:{{player.weapon.name}} )</div>
          <div class="slayer__hp-bar">
            <div
              class="slayer__hp-count-bg"
              :style="{width: ((player.hpCurrent / player.hp)*100).toFixed() + '%'}"
            ></div>
            <div
              class="slayer__hp-count"
            >{{player.hpCurrent}} ({{ ((player.hpCurrent / player.hp)*100).toFixed() }}% of {{ player.hp }})</div>
          </div>
        </div>
        <div class="slayer__col">
          <div class="slayer__name">Monster</div>
          <div class="slayer__hp-bar">
            <div
              class="slayer__hp-count-bg"
              :style="{width: ((mob.hpCurrent / mob.hp)*100).toFixed() + '%'}"
            ></div>
            <div
              class="slayer__hp-count"
            >{{mob.hpCurrent}} ({{ ((mob.hpCurrent / mob.hp)*100).toFixed() }}% of {{ mob.hp }})</div>
          </div>
        </div>
      </div>

      <div class="slayer__row">
        <div class="slayer__second" v-if="gameRunning">
          <button class="slayer__btn slayer__btn--attack" @click="action('attack')">Attack</button>
          <button class="slayer__btn slayer__btn--block" @click="action('sAttack')">Special Attack</button>
          <button class="slayer__btn slayer__btn--heal" @click="action('heal')">Heal</button>
          <button class="slayer__btn slayer__btn--defeat" @click="endGame(' died')">Give up</button>
        </div>

        <div class="slayer__first" v-else>
          <button class="slayer__btn" @click="initGame()">Start</button>
        </div>
      </div>

      <div class="slayer__row">
        <div class="slayer__log">
          <div
            class="slayer__log-item slayer__log-item--player"
            v-for="(item, index) in slayerLogs"
            :key="index"
          >{{item.char.name}} {{item.move}} for {{ item.ap }} with {{item.weapon}}</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to slayer!",
      gameRunning: false,
      endGameStatus: false,
      gameResult: "",

      player: {
        name: "Player",
        hp: 1500,
        hpCurrent: 1500,
        weapon: '',
        ap: 0,
        ma: 0,
        str: 10,
        int: 20,
        end: 10,
        armor: 100
      },

      mob: {
        name: "Monster",
        hp: 1000,
        hpCurrent: 1000,
        weapon: '',
        ap: 0,
        ma: 0,
        str: 10,
        int: 10,
        end: 10,
        armor: 100
      },

      weapon: {
        sword: {
          name: "sword",
          pAtk: 7,
          mAtk: 1
        },
        axe: {
          name: "axe",
          pAtk: 10,
          mAtk: 1
        },
        staff: {
          name: "staff",
          pAtk: 3,
          mAtk: 10
        }
      },

      slayerLogs: []
    };
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    initGame() {
      let t = this;

      t.endGameStatus = false;
      t.message = "Game started";
      t.gameRunning = true;

      t.player.hpCurrent = t.player.hp;
      t.mob.hpCurrent = t.mob.hp;
      t.slayerLogs = [];
    },

    endGame: function endGame(message) {
      let t = this;

      t.endGameStatus = !t.endGameStatus;

      if (t.player.hpCurrent <= 0) {
        t.gameResult = "lose";
      } else {
        t.gameResult = message;
      }
    },

    turn: function turn(char, weapon, moveType) {
      let t = this;

      char.weapon = weapon;

      let ap = t.getRandomInt(char.str * weapon.pAtk, char.str * (weapon.pAtk + 10));
      char.ap = ap;

      let ma = t.getRandomInt(char.int * weapon.mAtk, char.int * (weapon.mAtk + 10));
      char.ma = ma;

      function moveLogic() {
        if (moveType === "heal") {
          if (char === t.player) {
            t.player.hpCurrent += t.player.ma;
          } else {
            t.player.hpCurrent -= t.mob.ap;
          }
        } else if (moveType === "sAttack") {
          if (char === t.player) {
            t.mob.hpCurrent -= t.player.ap * 2;
          } else {
            t.player.hpCurrent -= t.mob.ap;
          }
        } else {
          if (char === t.player) {
            t.mob.hpCurrent -= t.player.ap;
          } else {
            t.player.hpCurrent -= t.mob.ap;
          }
        }

        if (t.player.hpCurrent >= t.player.hp) {
          t.player.hpCurrent = t.player.hp;
        }

        function makeLog() {
          t.slayerLogs.unshift({
            weapon: weapon.name,
            char: char,
            ap: char.ap,
            ma: char.ma,
            move: moveType
          });
        }
        makeLog();
      }

      if (char.hpCurrent > 0) {
        moveLogic();
      } else {
        t.endGame("win!");
      }
    },

    action: function action(moveType) {
      let t = this;

      t.turn(t.player, t.weapon.staff, moveType);
      t.turn(t.mob, t.weapon.axe, "attack");
    }
  }
};
</script>
