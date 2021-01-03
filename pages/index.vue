<template>
  <div>
    <DepartmentTree v-model="departments" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DepartmentTree from '@/components/DepartmentTree.vue';

export default Vue.extend({
  components: {
    DepartmentTree,
  },

  async fetch() {
    const convertedDepartmentTree = await fetch(
      'http://localhost:3000/api/departments'
    ).then((res) => res.json());

    this.departments = this.convertToTree(convertedDepartmentTree);
  },

  data() {
    return {
      departments: null,
    };
  },

  methods: {
    /**
     * バックエンドから受け取った配列を階層構造データに変換する
     */
    convertToTree(datas: any[], id = null, link = 'parent_id') {
      const rootNode = datas.filter((data) => data[link] === id)
      const convertedTree: any = rootNode.map((data) => ({
        ...data,
        children: this.convertToTree(datas, data.id),
      }));
      return convertedTree;
    },
  },
});
</script>
