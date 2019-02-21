export default {
  tableHeadRowClassName ({row, rowIndex}) {
    return 'warning-row'
  },
  tableRowClassName ({row, rowIndex}) {
    if (rowIndex % 2 !== 0) {
      return 'warning-row'
    }
  }
}
