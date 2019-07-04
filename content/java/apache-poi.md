---
title: "Apache POI (Spreadsheets)"
date: 2019-07-04T10:18:14-04:00
draft: false
---

## Generate Excel workbook, spreadsheet, and table with formatting

As of version Apache POI `4.0.0`,

{{<highlight java>}}
XSSFWorkbook workbook = new XSSFWorkbook();
XSSFSheet sheet = workbook.createSheet("Architecture");

//  < v4.0.0
XSSFTable table = sheet.createTable();

// >= 4.0.0
XSSFTable table = sheet.createTable(null);
CTTable cttable = table.getCTTable();

cttable.setDisplayName("Table1");
cttable.setId(1);
cttable.setName("Test");
cttable.setRef("A1:C11");
cttable.setTotalsRowShown(false);

CTTableStyleInfo styleInfo = cttable.addNewTableStyleInfo();
styleInfo.setName("TableStyleMedium2");
styleInfo.setShowColumnStripes(false);
styleInfo.setShowRowStripes(true);

CTTableColumns columns = cttable.addNewTableColumns();
columns.setCount(3);
for (int i = 1; i <= 3; i++) {
  CTTableColumn column = columns.addNewTableColumn();
  column.setId(i);
  column.setName("Column" + i);
}

for (int r = 0; r < 2; r++) {
  XSSFRow row = sheet.createRow(r);
  for(int c = 0; c < 3; c++) {
    XSSFCell cell = row.createCell(c);
    if(r == 0) { //first row is for column headers
      //content **must** be here for table column names
      cell.setCellValue("Column"+ (c+1));
    } else {
      cell.setCellValue("Data.")
    }
  }
}    

try (FileOutputStream outputStream =
      new FileOutputStream("ExcelTableTest.xlsx")) {
  workbook.write(outputStream);
}
{{</highlight>}}

