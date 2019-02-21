<template>
    <div style="text-align:center;">
          <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    layout="total, pager, jumper"
                    :total="total" class="mgt20">
          </el-pagination>
    </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: () => {}
    },
    pageSizes: {
      type: Array,
      default: () => {}
    },
    pageSize: {
      type: Number,
      default: () => {}
    },
    total: {
      type: Number,
      default: () => {}
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('sizeChange', val)
    },
    handleCurrentChange (val) {
      this.$emit('currentChange', val)
    }
  }
}
</script>

<style>
</style>
