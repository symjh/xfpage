<template>
<el-form ref="form" :model="sizeForm" label-width="80px" size="medium">
  <sum-band :total="total" @allChoose="allChoose" ></sum-band>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @select-all="selectAll"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="100%">
    </el-table-column>
    <el-table-column label="全选">
      <template slot-scope="scope">
        <el-card shadow="always">
          ￥{{ scope.row.price }}.00
        </el-card>
      </template>
    </el-table-column>
  </el-table>
  <div style="height:600px;"></div>
</el-form>
</template>

<script>
import SumBand from './SumBand.vue'

export default {
  name: 'hello',
  data () {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData3: [{
          price: 100,
        }, {
          price: 100,
        }, {
          price: 100,
        }, {
          price: 100,
        }, {
          price: 100,
        }, {
          price: 100,
        }, {
          price: 100,
        }],
        multipleSelection: [],
        total:0,
    }
  },
  methods: {
    onSubmit() {
      console.log(this.sizeForm);
    },
    //选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    //全选
    allChoose() {

      this.toggleSelection(this.tableData3);
    },
    selectAll(){
      console.log("allChoose");
    },
    handleSelectionChange(val) {
      console.log(val);
      var rs = 0;
      for(var i = 0;i<val.length;i++){
        rs += val[i].price;
      }
      this.total = rs;
    }
  },
  components: {
    SumBand
  }
}
</script>


