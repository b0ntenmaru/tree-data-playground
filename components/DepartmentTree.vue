<template>
  <div class="department-tree-container">
    <Draggable
      group="departments"
      draggable=".department-list"
      handle=".handle"
      :animation="300"
      class="draggable-wrapper"
      @input="emitter"
    >
      <div
        v-for="(department, index) in value"
        :key="index"
        class="department-list"
      >
        <div class="handle department-list-lane">
          {{ department.name }}
        </div>

        <Draggable group="members" :animation="300" @input="emitter">
          <div v-for="(member, i) in department.members" :key="i">
            {{ member.name }}
          </div>
        </Draggable>

        <div class="department-children">
          <DepartmentTree v-model="department.children" />
        </div>
      </div>
    </Draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Draggable from 'vuedraggable';

export default Vue.extend({
  name: 'DepartmentTree',

  components: {
    Draggable,
  },

  props: {
    value: {},
  },

  methods: {
    emitter(value: any) {
      console.log(value)
      this.$emit('input', value);
    },
  },
});
</script>

<style>
div.draggable-wrapper {
  display: flex;
}

div.department-list {
  width: 100%;
  display: inline-block;
  text-align: center;
}

div.department-list-lane {
  background: #ccc;
}
</style>
