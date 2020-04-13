function RegardsMag() {
    var Time_Hours = new Date().getHours();
    var helloText = "您好";
    console.log(Time_Hours);
    if (Time_Hours > 0) {
        if (Time_Hours > 6) {
            if (Time_Hours > 7) {
                if (Time_Hours > 11) {
                    if (Time_Hours > 13) {
                        if (Time_Hours > 18) {
                            if (Time_Hours > 22) {
                                if (Time_Hours > 23) {
                                    helloText = "这里是十三月,32号,星期八,24点"
                                } else {
                                    helloText = "很晚了,要睡觉了";
                                }
                            } else {
                                helloText = "晚上好";
                            }
                        } else {
                            helloText = "下午好";
                        }
                    } else {
                        helloText = "中午好";
                    }
                } else {
                    helloText = "早上好";
                }
            } else {
                helloText = "早起是美好一天的开始";
            }
        } else {
            helloText = "现在时间太晚了,看手机对眼睛不好";
        }
    } else {
        helloText = "再努力一些,你就能时光倒流了";
    }
    return helloText;
}