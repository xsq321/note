<template>
  <div id="home">
    <div class="column">
      <div class="panel">
        <div class="panel-header">柱形图</div>
        <div class="chart">
          <ChartTest />
        </div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <div class="panel-header">柱形图</div>
        <div class="chart" id="chart2">图表</div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <div class="panel-header">柱形图</div>
        <div class="chart" id="chart3">图表</div>
        <div class="panel-footer"></div>
      </div>
    </div>
    <div class="column">
      <div class="panel" id="map">
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <div class="panel-footer"></div>
      </div>
    </div>
    <div class="column">
      <div class="panel">
        <div class="panel-header">柱形图</div>
        <div class="chart" id="chart4">图表</div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <div class="panel-header">柱形图</div>
        <div class="chart" id="chart5">图表</div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <div class="panel-header">柱形图</div>
        <div class="chart" id="chart6">图表</div>
        <div class="panel-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartTest from "./charts/ChartTest.vue";
export default {
  components: {
    ChartTest,
  },
};
</script>

<style lang="scss" scoped>
#home {
  background-color: rgb(6, 6, 86);
  height: 100%;
  display: flex;
  .column {
    flex: 3;
    &:nth-child(2) {
      flex: 5;
    }
    .panel {
      height: 3.75rem;
      margin: 0.125rem 0.0625rem;
      border: 1px solid rgba(25, 186, 139, 0.17);
      background-color: rgba(255, 255, 255, 0.04);
      position: relative;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        border-left: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
        content: "";
      }
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        border-top: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
        content: "";
      }
      .panel-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        &::before {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-left: 2px solid #02a6b5;
          border-bottom: 2px solid #02a6b5;
          content: "";
        }
        &::after {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 20px;
          border-bottom: 2px solid #02a6b5;
          border-right: 2px solid #02a6b5;
          content: "";
        }
      }
      .panel-header {
        height: 0.6rem;
        color: #fff;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.25rem;
      }
      .chart {
        margin: 0 0.125rem;
        height: 3rem;
      }
    }
    #map {
      height: 7.625rem;
    }
  }
}
</style>
