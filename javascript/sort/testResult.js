var RATELIST = [
    {
        "name":"原始冒泡排序一",
        "statList":[
            {
                "standardData": "10000",
                "timeList":[118,116]
            },
            {
                "standardData": "100000",
                "timeList":[10575,11085]
            }
        ]
    },
    {
        "name":"冒泡排序二",
        "statList":[
            {
                "standardData": "10000",
                "timeList":[87,93]
            },
            {
                "standardData": "100000",
                "timeList":[8355,8045]
            }
        ]
    },
    {
        "name":"选择排序",
        "statList":[
            {
                "standardData": "10000",
                "timeList":[71,74]
            },
            {
                "standardData": "100000",
                "timeList":[6972,6636]
            }
        ]
    },
    {
        "name":"归并排序",
        "statList":[
            {
                "standardData": "10000",
                "timeList":[118,116]
            },
            {
                "standardData": "100000",
                "timeList":[118,116]
            }
        ]
    }
];
function GetList(){
    return RATELIST;
}
