// 百度地图API功能
var Index = {
  map: new BMap.Map('mapBox'), ////初始化地图
  point: new BMap.Point(116.404, 39.915),
  Init: function() {
    this.map.centerAndZoom(this.point, 15);
    this.addBigPoint();
  },
  //百度地图增加海量点测试
  addBigPoint: function() {
    var bounds = this.map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);

    for (var i = 0; i < 200; i++) {
      var point = new BMap.Point(
        sw.lng + lngSpan * (Math.random() * 0.7),
        ne.lat - latSpan * (Math.random() * 0.7)
      );
      var marker = new BMap.Marker(point); // 创建标注
      this.map.addOverlay(marker); // 将标注添加到地图中
    }
  }
};
Index.Init();
