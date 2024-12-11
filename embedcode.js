const fs = require('fs');
let targetJsContent =  fs.readFileSync("明文源码.js", 'utf-8')
const embedMarker = `const UA`;
const embedIndex = targetJsContent.indexOf(embedMarker);

const testcontent =  fs.readFileSync("附加内容.js", 'utf-8');

if (embedIndex !== -1) {
    // 将代码片段嵌入到目标JS文件中
    targetJsContent = targetJsContent.slice(0, embedIndex ) + testcontent + '\n' + targetJsContent.slice(embedIndex);

    // 将更新后的内容写回目标JS文件
    fs.writeFileSync("_worker.js", targetJsContent);
}
