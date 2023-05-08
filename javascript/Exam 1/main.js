let electricityNumber = parseFloat(prompt('Enter monthly electricity consumption:'))
if (electricityNumber > 0 && electricityNumber <= 50) {
    let paidAmount1 = parseFloat(electricityNumber * 1.678)
    console.log(paidAmount1);
    `alert(Số tiền điện phải trả là: ${paidAmount1})`;
} else if (electricityNumber >= 51 && electricityNumber < 100) {
    let paidAmount2 = (electricityNumber - 50)*1.734 + 50*1.678 ;
    console.log(paidAmount2);
    `alert(Số tiền điện phải trả là: ${paidAmount2})`
} else if ( electricityNumber <=200) {
    let paidAmount3 = (electricityNumber - 100)*2.014 + 50*1.734 + 50*1.678;
    console.log(paidAmount3);
    `alert(Số tiền điện phải trả là: ${paidAmount3})`
} else if (electricityNumber <=300) {
    let paidAmount4 = (electricityNumber - 200)*2.536 + 100*2.014 + 50*1.734 + 50*1.678;
    console.log(paidAmount4);
    `alert(Số tiền điện phải trả là: ${paidAmount4})`
}else if (electricityNumber <=400) {
    let paidAmount5 = (electricityNumber - 300)*2.834+ 100*2.536 + 100*2.014 + 50*1.734 + 50*1.678;
    console.log(paidAmount5);
    `alert(Số tiền điện phải trả là: ${paidAmount5})`
}else if (electricityNumber <=500) {
    let paidAmount6 = (electricityNumber - 400)*2.937+ 100*2.834+ 100*2.536 + 100*2.014 + 50*1.734 + 50*1.678;
    console.log(paidAmount6);
    `alert(Số tiền điện phải trả là: ${paidAmount6})`
}
