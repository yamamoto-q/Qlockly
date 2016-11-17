/*
Blockly.Msg.Q_TYPE.ARRAY_LIST = "[ArrayList]";
Blockly.Q_IOTYPE.ARRAY_LIST = "java.util.ArrayList";
*/

// -----------------------------------------------------------------------
// 選択型
// new java.util.ArrayList()
Blockly.Blocks['new_java_util_arraylist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Q_TYPE.ARRAY_LIST);
    this.appendDummyInput()
        .appendField("新規");
    this.appendValueInput("initialCapacity")
        .setCheck("Number")
        .appendField("初期サイズ");
    this.setInputsInline(true);
    this.setOutput(true, Blockly.Q_IOTYPE.ARRAY_LIST);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
}
};
Blockly.JavaScript['new_java_util_arraylist'] = function(block) {
  var value_initialcapacity = Blockly.JavaScript.valueToCode(block, 'initialCapacity', Blockly.JavaScript.ORDER_NONE);
  var code = 'new java.util.ArrayList(' + value_initialcapacity + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// new java.util.ArrayList()
Blockly.Blocks['java_util_arraylist_get'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Item");
        this.appendValueInput(Blockly.Q_IOTYPE.ARRAY_LIST)
            .setCheck(null)
            .appendField("ArrayList");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("TRUE"), "parse");
        this.appendValueInput("index")
            .setCheck("Number")
            .appendField("の位置");
        this.appendDummyInput()
            .appendField("にあるItem");
        this.setInputsInline(true);
        this.setOutput(true, "com.questetra.bpms.core.select.Item");
        this.setColour(120);
        this.setTooltip('ArrayListに格納された、Itemのうち、指定した位置（index）のItemを取得します');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['java_util_arraylist_get'] = function(block) {
    var value_java_util_arraylist = Blockly.JavaScript.valueToCode(block, 'java.util.ArrayList', Blockly.JavaScript.ORDER_NONE);
    var checkbox_parse = block.getFieldValue('parse') == 'TRUE';
    var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_NONE);
    if (checkbox_parse) {
        var code = 'new java.util.ArrayList(' + value_java_util_arraylist + ').get(' + value_index + ')';
    } else {
        var code = value_java_util_arraylist + '.get(' + value_index + ')';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// new com.questetra.bpms.core.select.Item()
Blockly.Blocks['com_questetra_bpms_core_select_item'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Item");
        this.appendDummyInput()
            .appendField("新規");
        this.appendValueInput("NAME")
            .setCheck(["String", "java.lang.String"])
            .appendField("表示ラベル");
        this.appendDummyInput()
            .appendField("(String)");
        this.appendValueInput("value")
            .setCheck(["String", "java.lang.String"])
            .appendField("選択肢ID");
        this.appendDummyInput()
            .appendField("(String)");
        this.setInputsInline(true);
        this.setOutput(true, "com.questetra.bpms.core.select.Item");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['com_questetra_bpms_core_select_item'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
    if (value_name && value_value) {
        var code = 'new com.questetra.bpms.core.select.Item(' + value_value + ', ' + value_name + ')';
    } else {
        var code = 'new com.questetra.bpms.core.select.Item()';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//　com.questetra.bpms.core.select.Item.toString()
Blockly.Blocks['com_questetra_bpms_core_select_item_tostring'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendValueInput("com.questetra.bpms.core.select.Item")
            .setCheck("com.questetra.bpms.core.select.Item")
            .appendField("Item");
        this.appendDummyInput()
            .appendField("の文字表現");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('例) item{value=[選択肢ID], display=[表示ラベル]}');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_core_select_item_tostring'] = function(block) {
    var value_com_questetra_bpms_core_select_item = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.Item', Blockly.JavaScript.ORDER_NONE);
    var code = value_com_questetra_bpms_core_select_item + '.toString()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//　com.questetra.bpms.core.select.Item.getValue()
Blockly.Blocks['com_questetra_bpms_core_select_item_getvalue'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendValueInput("com.questetra.bpms.core.select.Item")
            .setCheck("com.questetra.bpms.core.select.Item")
            .appendField("Item");
        this.appendDummyInput()
            .appendField("の選択肢ID");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_core_select_item_getvalue'] = function(block) {
    var value_com_questetra_bpms_core_select_item = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.Item', Blockly.JavaScript.ORDER_NONE);
    var code = value_com_questetra_bpms_core_select_item + '.getValue()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//　com.questetra.bpms.core.select.Item.getDisplay()
Blockly.Blocks['com_questetra_bpms_core_select_item_getdisplay'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendValueInput("com.questetra.bpms.core.select.Item")
            .setCheck("com.questetra.bpms.core.select.Item")
            .appendField("Item");
        this.appendDummyInput()
            .appendField("の表示ラベル");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_core_select_item_getdisplay'] = function(block) {
    var value_com_questetra_bpms_core_select_item = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.Item', Blockly.JavaScript.ORDER_NONE);
    var code = value_com_questetra_bpms_core_select_item + '.getDisplay()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//　com.questetra.bpms.core.select.Item.setValue()
Blockly.Blocks['com_questetra_bpms_core_select_item_setvalue'] = {
    init: function() {
        this.appendValueInput("com.questetra.bpms.core.select.Item")
            .setCheck(null)
            .appendField("Item");
        this.appendValueInput("value")
            .setCheck("String")
            .appendField("(Item) に選択肢ID");
                this.appendDummyInput()
            .appendField("(String) をセットする");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('選択肢IDをセットする Itemの型を担保できないので注意');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_core_select_item_setvalue'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var value_com_questetra_bpms_core_select_item = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.Item', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_com_questetra_bpms_core_select_item + '.setValue(' + value_value + ');\n';
    return code;
};

//　com.questetra.bpms.core.select.Item.setDisplay()
Blockly.Blocks['com_questetra_bpms_core_select_item_setdisplay'] = {
    init: function() {
        this.appendValueInput("com.questetra.bpms.core.select.Item")
            .setCheck(null)
            .appendField("Item");
        this.appendValueInput("display")
            .setCheck("String")
            .appendField("(Item) に表示ラベル");
        this.appendDummyInput()
            .appendField("(String) をセットする");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('表示ディスプレイをセットする Itemの型を担保できないので注意');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_core_select_item_setdisplay'] = function(block) {
    var value_display = Blockly.JavaScript.valueToCode(block, 'display', Blockly.JavaScript.ORDER_ATOMIC);
    var value_com_questetra_bpms_core_select_item = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.Item', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_com_questetra_bpms_core_select_item + '.setDisplay(' + value_display + ');\n';
    return code;
};

// com_questetra_bpms_core_select_item_isvalid.isValid()
Blockly.Blocks['com_questetra_bpms_core_select_item_isvalid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Boolean");
        this.appendValueInput("com.questetra.bpms.core.select.Item")
            .setCheck(null)
            .appendField("Item");
        this.appendDummyInput()
            .appendField("(Item) の有効/無効判定");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(120);
        this.setTooltip('有効な選択肢かどうか返す 選択肢ID か 表示ラベル が空の場合 false');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_core_select_item_isvalid'] = function(block) {
    var value_com_questetra_bpms_core_select_item = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.Item', Blockly.JavaScript.ORDER_NONE);
    var code = value_com_questetra_bpms_core_select_item + '.isValid()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// com.questetra.bpms.core.select.Item.equals()
Blockly.Blocks['com_questetra_bpms_core_select_item_equals'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Boolean");
        this.appendValueInput("com.questetra.bpms.core.select.ItemA")
            .setCheck(null)
            .appendField("Item A");
        this.appendValueInput("com.questetra.bpms.core.select.ItemB")
            .setCheck(null)
            .appendField("(Item) と Item B");
        this.appendDummyInput()
            .appendField("(Item) が同じかどうか");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(120);
        this.setTooltip('同じかどうかを判定する');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_core_select_item_equals'] = function(block) {
    var value_com_questetra_bpms_core_select_itema = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.ItemA', Blockly.JavaScript.ORDER_NONE);
    var value_com_questetra_bpms_core_select_itemb = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.core.select.ItemB', Blockly.JavaScript.ORDER_NONE);
    var code = value_com_questetra_bpms_core_select_itema + '.equals(' + value_com_questetra_bpms_core_select_itemb + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
