function createBarChart(data, width, height, color) {

    // ������� ��������� ��� ���������
    var chart = document.createElement("div");
    chart.style.width = width + "px";
    chart.style.height = height + "px";
    chart.style.position = "relative";
    
    // ������� ������������ �������� � ������� ������
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    var scale = height / max;
    var barWidth = Math.floor(width / data.length);

    // ������� ��������� ������� ���������
    for (var i = 0; i < data.length; i++) {
        var bar = document.createElement("div");
        
        bar.style.height = data[i] * scale + "px";
        bar.style.width = barWidth - 4 + "px";

        bar.style.position = "absolute";
        bar.style.margin = "4px";
        bar.style.bottom = "0px";
        bar.style.left = barWidth * i + "px";

        bar.style.backgroundColor = color;

        chart.appendChild(bar);
    }

    return chart;
}
