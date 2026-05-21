let arr = [{
    value: '',
    value2: '1',
    message: '请先上传身份证照片信息！'
}, {
    value: '1',
    value2: '333',
    message: '请先上传身份证照片信息！'
}, {
    value: '2',
    value2: '444',
    message: '请先上传银行卡照片信息！'
}]
let count = arr.findIndex(itm => {
    if (itm.value == '' || itm.value == undefined || itm.value2 == '' || itm.value2 == undefined) {
        return true
    }
    return false
})
if (count != -1) {
    let res = {
        success: false,
        message: arr[count].message
    }
    console.log(res);
    return;
}