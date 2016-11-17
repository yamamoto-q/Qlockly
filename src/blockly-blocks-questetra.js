Blockly.Msg.Q_R2300 = "http://u.questetra.com/R2300-WebOutU90";

Blockly.Msg.PROCESS_DATA = {};
Blockly.Msg.PROCESS_DATA.STRING ="文字型プロセスデータ項目";
Blockly.Msg.PROCESS_DATA.NUMBER ="数値型プロセスデータ項目";
Blockly.Msg.PROCESS_DATA.SELECT ="選択型プロセスデータ項目";
Blockly.Msg.PROCESS_DATA.DATE = "日付型プロセスデータ項目";
Blockly.Msg.PROCESS_DATA.DATE_TIME = "日時型プロセスデータ項目";
Blockly.Msg.PROCESS_DATA.Q_USER_VIEW = "ユーザ型プロセスデータ項目";
Blockly.Msg.PROCESS_DATA.Q_GROUP_VIEW = "組織型プロセスデータ項目";
Blockly.Msg.PROCESS_DATA.Q_TABLE = "テーブル型プロセスデータ項目";

Blockly.Msg.Q_TYPE = {};
Blockly.Msg.Q_TYPE.VOID = "[Void]";
Blockly.Msg.Q_TYPE.STRING = "[String]";
Blockly.Msg.Q_TYPE.LONG = "[Long]";
Blockly.Msg.Q_TYPE.ADDABLE_TS = "[AddableTimestamp]";
Blockly.Msg.Q_TYPE.ADDABLE_DATE = "[AddableDate]";
Blockly.Msg.Q_TYPE.BIG_DECIMAL = "[BigDecimal]";
Blockly.Msg.Q_TYPE.ARRAY_LIST = "[ArrayList]";
Blockly.Msg.Q_TYPE.Q_USER_VIEW = "[QuserView]";
Blockly.Msg.Q_TYPE.Q_GROUP_VIEW = "[QgroupView]";
Blockly.Msg.Q_TYPE.Q_List_ARRAY = "[ListArray]";

Blockly.Q_IOTYPE = {};
Blockly.Q_IOTYPE.STRING = "String";
Blockly.Q_IOTYPE.JAVA_STRING = "java.lang.String";
Blockly.Q_IOTYPE.LONG = "java.lang.Long";
Blockly.Q_IOTYPE.ADDABLE_TS = "com.questetra.bpms.util.AddableTimestamp";
Blockly.Q_IOTYPE.ADDABLE_DATE = "com.questetra.bpms.util.AddableDate";
Blockly.Q_IOTYPE.BIG_DECIMAL = "java.math.BigDecimal";
Blockly.Q_IOTYPE.ARRAY_LIST = "java.util.ArrayList";
Blockly.Q_IOTYPE.Q_USER_VIEW = "com.questetra.bpms.core.event.scripttask.QuserView";
Blockly.Q_IOTYPE.Q_GROUP_VIEW = "com.questetra.bpms.core.event.scripttask.QgroupView";
Blockly.Q_IOTYPE.Q_List_ARRAY = "com.questetra.bpms.core.model.formdata.ListArray";


/*
 unknownType
 */

// toString
Blockly.Blocks['tostring'] = {
    init: function() {
        this.appendValueInput("Value")
            .setCheck(null)
            .appendField("型変換");
        this.appendDummyInput()
            .appendField("をString型に");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(65);
        this.setTooltip('any Type > String型に変換します > String');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['tostring'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_NONE);
    var code = 'String(' + value_value + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// new java.math.BigDecimal
Blockly.Blocks['tobigdecimal'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(["String", "java.lang.String", "java.lang.Long", "java.lang.Integer", "java.lang.Double", "java.math.BigInteger"])
            .appendField("型変換");
        this.appendDummyInput()
            .appendField("数値型（BigDecimal）に変換");
        this.setInputsInline(true);
        this.setOutput(true, "java.math.BigDecimal");
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['tobigdecimal'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'new java.math.BigDecimal(' + value_value + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};




// Questetra
// プロセスデータ -------------------------------------------------------
/**
 * クラスの説明文。
 * @class processInstance
 **/

/**
 * プロセスの件名を取得します
 * @method getProcessInstanceTitle
 * @return {java.lang.String} プロセスの件名
 **/
Blockly.Blocks['processinstance_getprocessinstancetitle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("件名");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('プロセスの件名を取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstancetitle'] = function(block) {
    var code = 'processInstance.getProcessInstanceTitle()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * プロセスの件名をセットします
 * @method setProcessInstanceTitle
 * @param title {java.lang.String} セットする件名
 * @return void
 **/
Blockly.Blocks['processinstance_setprocessinstancetitle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField("件名に");
        this.appendValueInput("title")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('プロセスの件名をセットします');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_setprocessinstancetitle'] = function(block) {
    console.log(block);
    var value_string = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_NONE);
    var code = 'processInstance.setProcessInstanceTitle(' + value_string + ');';
    return code;
};

/**
 * プロセスモデル番号の値を取得します
 * @method getProcessModelInfoId
 * @return {java.lang.Long} プロセスモデル番号
 **/
Blockly.Blocks['processinstance_getprocessmodelinfoid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.LONG);
        this.appendDummyInput()
            .appendField("プロセスモデル番号");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.LONG);
        this.setColour(120);
        this.setTooltip('プロセスモデル番号の値を取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessmodelinfoid'] = function(block) {
    var code = 'processInstance.getProcessModelInfoId()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * プロセスモデルの名称を取得します
 * @method getProcessModelInfoName
 * @return {java.lang.String} プロセスモデルの名称
 **/
Blockly.Blocks['processinstance_getprocessmodelinfoname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("プロセスモデルの名称");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('プロセスモデルの名称を取得を取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessmodelinfoname'] = function(block) {
    var code = 'processInstance.getProcessModelInfoName()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * プロセス連番を取得を取得します
 * @method getProcessInstanceSequenceNumber
 * @return {java.lang.Long} プロセス連番
 **/
Blockly.Blocks['processinstance_getprocessinstancesequencenumber'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.LONG);
        this.appendDummyInput()
            .appendField("プロセス連番");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.LONG);
        this.setColour(120);
        this.setTooltip('プロセス連番の値を取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstancesequencenumber'] = function(block) {
    var code = 'processInstance.getProcessInstanceSequenceNumber()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * プロセスモデルのカテゴリを取得します
 * @method getProcessModelInfoCategory
 * @return {java.lang.Long} プロセスモデルのカテゴリ
 **/
Blockly.Blocks['processinstance_getprocessmodelinfocategory'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("カテゴリー名");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('プロセスモデルのカテゴリを取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessmodelinfocategory'] = function(block) {
    var code = 'processInstance.getProcessModelInfoCategory()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// processInstance.getProcessModelVersion()
Blockly.Blocks['processinstance_getprocessmodelversion'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.LONG);
        this.appendDummyInput()
            .appendField("バージョン");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.LONG);
        this.setColour(120);
        this.setTooltip('プロセスが開始されたときのプロセスモデルのバージョンを取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessmodelversion'] = function(block) {
    var code = 'processInstance.getProcessModelVersion()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// processInstance.getProcessInstanceId()
Blockly.Blocks['processinstance_getprocessinstanceid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.LONG);
        this.appendDummyInput()
            .appendField("プロセスID");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.LONG);
        this.setColour(120);
        this.setTooltip(' プロセスIDを取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstanceid'] = function(block) {
    var code = 'processInstance.getProcessInstanceId()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// processInstance.getProcessInstanceInitQuserId()
Blockly.Blocks['processinstance_getprocessinstanceinitquserid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.LONG);
        this.appendDummyInput()
            .appendField("プロセス開始ユーザのID");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.LONG);
        this.setColour(120);
        this.setTooltip('プロセス開始ユーザのIDを取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstanceinitquserid'] = function(block) {
    var code = 'processInstance.getProcessInstanceInitQuserId()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// processInstance.getProcessInstanceInitQuserName()
Blockly.Blocks['processinstance_getprocessinstanceinitqusername'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("プロセス開始ユーザの名前");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('プロセス開始ユーザの名称を取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstanceinitqusername'] = function(block) {
    var code = 'processInstance.getProcessInstanceInitQuserName()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// processInstance.getProcessInstanceInitQgroupId()
Blockly.Blocks['processinstance_getprocessinstanceinitqgroupid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.LONG);
        this.appendDummyInput()
            .appendField("プロセス開始組織のID");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.LONG);
        this.setColour(120);
        this.setTooltip('プロセス開始組織のIDを取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstanceinitqgroupid'] = function(block) {
    var code = 'processInstance.getProcessInstanceInitQgroupId()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// processInstance.getProcessInstanceInitQgroupName()
Blockly.Blocks['processinstance_getprocessinstanceinitqgroupname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("プロセス開始組織の名称");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('プロセス開始組織の名称を取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstanceinitqgroupname'] = function(block) {
    var code = 'processInstance.getProcessInstanceInitQgroupName()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['processinstance_getprocessinstancestartdatetime'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.ADDABLE_TS);
        this.appendDummyInput()
            .appendField("プロセス開始日時");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.ADDABLE_TS);
        this.setColour(120);
        this.setTooltip('プロセス開始日時を取得します');
        this.setHelpUrl(Blockly.Msg.Q_R2300);
    }
};
Blockly.JavaScript['processinstance_getprocessinstancestartdatetime'] = function(block) {
    var code = 'processInstance.getProcessInstanceStartDatetime()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
// data.get()

/*
Blockly.Blocks['data_get'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["java.lang.String","String"])
        .appendField("プロセスデータ");
    this.appendDummyInput()
        .appendField("を取得");
    this.setInputsInline(true);
    this.setOutput(true, "unknownType");
    this.setColour(120);
    this.setTooltip('プロセスデータ項目の値を取得します > 型はプロセスデータ項目の設定に準じ、入力が無い場合には null が返されます');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['data_get'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  var code = 'data.get(' + value_name + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
*/
// -----------------------------------------------------------------------
// data.get() 文字型 java.lang.String
Blockly.Blocks['data_get_java_lang_string'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.STRING);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('文字型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['data_get_java_lang_string'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// retVal.put() 文字型 String | java.lang.String
Blockly.Blocks['retval_put_java_lang_string'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.STRING);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("VALUE")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("をセット");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setInputsInline(true);
        this.setTooltip('文字型プロセスデータ項目に値をセットします > void');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_java_lang_string'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};

// -----------------------------------------------------------------------
// data.get() 数値型 java.math.BigDecimal
Blockly.Blocks['data_get_java_math_bigdecimal'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.BIG_DECIMAL);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.NUMBER);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.BIG_DECIMAL);
        this.setColour(120);
        this.setTooltip('数値型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['data_get_java_math_bigdecimal'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// -----------------------------------------------------------------------
// retVal.put() 数値型 java.math.BigDecimal
Blockly.Blocks['retval_put_java_math_bigdecimal'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.NUMBER);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Q_IOTYPE.BIG_DECIMAL)
            .appendField(Blockly.Msg.Q_TYPE.BIG_DECIMAL);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('数値型プロセスデータ項目に値をセットします');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_java_math_bigdecimal'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};

// -----------------------------------------------------------------------
// data.get() 選択型 java.util.ArrayList
Blockly.Blocks['data_get_java_util_arraylist'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.ARRAY_LIST);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.SELECT);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.ARRAY_LIST);
        this.setColour(120);
        this.setTooltip('選択型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['data_get_java_util_arraylist'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// -----------------------------------------------------------------------
// retVal.put() 選択型 java.util.ArrayList
Blockly.Blocks['retval_put_java_util_arraylist'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.SELECT);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Q_IOTYPE.ARRAY_LIST)
            .appendField(Blockly.Msg.Q_TYPE.ARRAY_LIST);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('選択型プロセスデータ項目に値をセットします');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_java_util_arraylist'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};

// -----------------------------------------------------------------------
// data.get() 日付型　com.questetra.bpms.util.AddableDate
Blockly.Blocks['data_get_date_com_questetra_bpms_util_addabledate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.ADDABLE_DATE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.DATE);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.ADDABLE_DATE);
        this.setColour(120);
        this.setTooltip('日付型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['data_get_date_com_questetra_bpms_util_addabledate'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// -----------------------------------------------------------------------
// retVal.put() 日付型 java.lang.Long
Blockly.Blocks['retval_put_date_java_lang_Long'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.DATE);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Q_IOTYPE.ADDABLE_DATE)
            .appendField(Blockly.Msg.PROCESS_DATA.DATE);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('日付型プロセスデータ項目に値をセットします');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_date_java_lang_Long'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};

// -----------------------------------------------------------------------
// data.get() 日時型　com.questetra.bpms.util.AddableDate
Blockly.Blocks['data_get_datetime_com_questetra_bpms_util_addabledate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.ADDABLE_DATE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.DATE_TIME);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.ADDABLE_DATE);
        this.setColour(120);
        this.setTooltip('日時型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['data_get_datetime_java_lang_Long'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// -----------------------------------------------------------------------
// retVal.put() 日時型 java.lang.Long
Blockly.Blocks['retval_put_datetime_java_lang_Long'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.DATE_TIME);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
         this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Q_IOTYPE.ADDABLE_DATE)
            .appendField(Blockly.Msg.Q_TYPE.ADDABLE_DATE);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('日時型プロセスデータ項目に値をセットします');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_datetime_java_lang_Long'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};

// -----------------------------------------------------------------------
// data.get() ユーザー型　com.questetra.bpms.core.event.scripttask.QuserView
Blockly.Blocks['data_get_com_questetra_bpms_core_event_scripttask_quserview'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.Q_USER_VIEW);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.Q_USER_VIEW);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.Q_USER_VIEW);
        this.setColour(120);
        this.setTooltip('ユーザー型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['data_get_com_questetra_bpms_core_event_scripttask_quserview'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// -----------------------------------------------------------------------
// retVal.put() ユーザー型 com.questetra.bpms.core.event.scripttask.QuserView
Blockly.Blocks['retval_put_com_questetra_bpms_core_event_scripttask_quserview'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.Q_USER_VIEW);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Q_IOTYPE.Q_USER_VIEW)
            .appendField(Blockly.Msg.Q_TYPE.Q_USER_VIEW);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('ユーザー型プロセスデータ項目に値をセットします');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_com_questetra_bpms_core_event_scripttask_quserview'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};

// -----------------------------------------------------------------------
// data.get() 組織型　com.questetra.bpms.core.event.scripttask.QgroupView
Blockly.Blocks['data_get_com_questetra_bpms_core_event_scripttask_qgroupview'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.Q_GROUP_VIEW);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.Q_GROUP_VIEW);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.Q_GROUP_VIEW);
        this.setColour(120);
        this.setTooltip('組織型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['dadata_get_com_questetra_bpms_core_event_scripttask_qgroupview'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// -----------------------------------------------------------------------
// retVal.put() 組織型 com.questetra.bpms.core.event.scripttask.QgroupView
Blockly.Blocks['retval_put_com_questetra_bpms_core_event_scripttask_qgroupview'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.Q_GROUP_VIEW);
        this.appendValueInput("NAME")
            this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Q_IOTYPE.Q_GROUP_VIEW)
            .appendField(Blockly.Msg.Q_TYPE.Q_GROUP_VIEW);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('組織型プロセスデータ項目に値をセットします');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_com_questetra_bpms_core_event_scripttask_qgroupview'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};

// -----------------------------------------------------------------------
// data.get() テーブル型　com.questetra.bpms.core.model.formdata.ListArray
Blockly.Blocks['data_get_com_questetra_bpms_core_model_formdata_listarray'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.Q_List_ARRAY);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.Q_TABLE);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("を取得");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Q_IOTYPE.Q_List_ARRAY);
        this.setColour(120);
        this.setTooltip('テーブル型プロセスデータ項目の値を取得します （入力が無い場合には null が返されます）');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['data_get_com_questetra_bpms_core_model_formdata_listarray'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var code = 'data.get(' + value_name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// -----------------------------------------------------------------------
// retVal.put() テーブル型 com.questetra.bpms.core.model.formdata.ListArray
Blockly.Blocks['retval_put_com_questetra_bpms_core_model_formdata_listarray'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCESS_DATA.Q_TABLE);
        this.appendValueInput("NAME")
            .setCheck([Blockly.Q_IOTYPE.JAVA_STRING, Blockly.Q_IOTYPE.STRING])
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Q_IOTYPE.Q_List_ARRAY)
            .appendField(Blockly.Msg.Q_TYPE.Q_List_ARRAY);
        this.appendDummyInput()
            .appendField("をセット");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('テーブル型プロセスデータ項目に値をセットします');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['retval_put_com_questetra_bpms_core_model_formdata_listarray'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
    var code = 'retVal.put(' + value_name + ', ' + value_value + ');\n';
    return code;
};


// -----------------------------------------
// 日付型
// new com.questetra.bpms.util.AddableDate()
Blockly.Blocks['new_com_questetra_bpms_util_addabledate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("AddableDate");
        this.appendDummyInput()
            .appendField("新規");
        this.appendValueInput("TIME")
            .setCheck([Blockly.Q_IOTYPE.LONG, "Number"])
            .appendField("Time* (Long)");
        this.setInputsInline(true);
        this.setOutput(true, "com.questetra.bpms.util.AddableDate");
        this.setColour(120);
        this.setTooltip('日付型を新規に作成します　日付はUNIXタイムスタンプで指定します > com.questetra.bpms.util.AddableDate');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['new_com_questetra_bpms_util_addabledate'] = function(block) {
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_NONE);
    var code = 'new com.questetra.bpms.util.AddableDate(' + value_time + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// new java.sql.Date()
Blockly.Blocks['new_java_sql_date'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Date");
    this.appendDummyInput()
        .appendField("新規");
    this.appendValueInput("Time")
        .setCheck([Blockly.Q_IOTYPE.LONG, "Number"])
        .appendField("Time* (Long)");
    this.appendDummyInput()
        .appendField("");
    this.setInputsInline(true);
    this.setOutput(true, "java.sql.Date");
    this.setColour(120);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['new_java_sql_date'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'Time', Blockly.JavaScript.ORDER_NONE);
  var code = 'new java.sql.Date(' + value_time + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// java.sql.Date.getHours():推奨されていません。
// java.sql.Date.getMinutes() 
// java.sql.Date.getSeconds() 
// setHours(int i) 
// setMinutes(int i) 
// setSeconds(int i)
Blockly.Blocks['date_settime'] = {
  init: function() {
    this.appendValueInput("Date")
        .setCheck("unknownType")
        .appendField("変数");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["AddableDate", "AddableDate"], ["Date", "Date"]]), "Type")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "parse")
        .appendField("型変換")
        .appendField("に");
    this.appendValueInput("Time")
        .setCheck([Blockly.Q_IOTYPE.LONG, "Number"])
        .appendField("Time*(Long)");
    this.appendDummyInput()
        .appendField("で日付をセット");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['date_settime'] = function(block) {
  var dropdown_type = block.getFieldValue('Type');
  var checkbox_parse = block.getFieldValue('parse') == 'TRUE';
  var value_date = Blockly.JavaScript.valueToCode(block, 'Date', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'Time', Blockly.JavaScript.ORDER_ATOMIC);
  if(!checkbox_parse){
    var code = value_date + '.setTime(' + value_time + ');\n';
  }else{
    if(dropdown_type == "AddableDate"){
      var code = value_date + ' = new com.questetra.bpms.util.AddableDate(' + value_date + '.getTime());\n'
      code += value_date + '.setTime(' + value_time + ');\n';
    }else{
      var code = value_date + ' = new java.sql.Date(' + value_date + '.getTime());\n'
      code += value_date + '.setTime(' + value_time + ');\n';
    }
  }
  return code;
};

Blockly.Blocks['java_sql_date_tostoring'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.Q_TYPE.STRING);
        this.appendValueInput("MaybeDate")
            .setCheck(null)
            .appendField("日付(AddableDate|Date)");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("TRUE"), "parse");
        this.appendDummyInput()
            .appendField("の yyyy-mm-dd形式");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.Q_IOTYPE.STRING);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['java_sql_date_tostoring'] = function(block) {
    var value_maybe_date = Blockly.JavaScript.valueToCode(block, 'MaybeDate', Blockly.JavaScript.ORDER_NONE);
    
    var checkbox_parse = block.getFieldValue('parse') == 'TRUE';
    if(checkbox_parse){
      var code = 'new java.sql.Date(' + value_maybe_date + '.getTime()).toString()';
    }else{
      var code = value_maybe_date + '.toString()';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['java_util_date_gettime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Q_TYPE.LONG);
    this.appendValueInput("Date")
        .setCheck(["com.questetra.bpms.util.AddableDate", "java.sql.Date", "java.util.Date"])
        .appendField("日付* (AddableDate|Date)");
    this.appendDummyInput()
        .appendField("のTime");
    this.setInputsInline(true);
    this.setOutput(true, Blockly.Q_IOTYPE.LONG);
    this.setColour(120);
    this.setTooltip('1970 年 1 月 1 日 00:00:00 GMT からのミリ秒数を返します');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['java_util_date_gettime'] = function(block) {
  var value_date = Blockly.JavaScript.valueToCode(block, 'Date', Blockly.JavaScript.ORDER_NONE);
  var code = value_date + '.getTime()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
Blockly.Blocks['com_questetra_bpms_util_addabledate_valueof_yyyy_mm_dd_'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Date");
        this.appendValueInput("yyyy-mm-dd")
            .setCheck("String")
            .appendField("yyyy-mm-dd");
        this.appendValueInput("com.questetra.bpms.util.AddableDate")
            .setCheck("com.questetra.bpms.util.AddableDate")
            .appendField("日付型");
        this.setInputsInline(true);
        this.setOutput(true, "java.sql.Date");
        this.setColour(120);
        this.setTooltip('JDBC 日付エスケープ形式中の文字列を Date 値に変換します > java.sql.Date');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_util_addabledate_valueof_yyyy_mm_dd_'] = function(block) {
    var value_yyyy_mm_dd = Blockly.JavaScript.valueToCode(block, 'yyyy-mm-dd', Blockly.JavaScript.ORDER_NONE);
    var value_com_questetra_bpms_util_addabledate = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.util.AddableDate', Blockly.JavaScript.ORDER_NONE);
    var code = value_com_questetra_bpms_util_addabledate + '.valueOf(' + value_yyyy_mm_dd + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['com_questetra_bpms_util_addabledate_valueof_java_lang_long_'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("java.sql.Date");
        this.appendValueInput("TIME")
            .setCheck(Blockly.Q_IOTYPE.LONG)
            .appendField("Time");
        this.appendValueInput("com.questetra.bpms.util.AddableDate")
            .setCheck("com.questetra.bpms.util.AddableDate")
            .appendField("日付型");
        this.setInputsInline(true);
        this.setOutput(true, "java.sql.Date");
        this.setColour(120);
        this.setTooltip('指定されたミリ秒の値を使って、Date 値に変換します > java.sql.Date');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_util_addabledate_valueof_java_lang_long_'] = function(block) {
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_NONE);
    var value_com_questetra_bpms_util_addabledate = Blockly.JavaScript.valueToCode(block, 'com.questetra.bpms.util.AddableDate', Blockly.JavaScript.ORDER_NONE);
    var code = value_com_questetra_bpms_util_addabledate + '.valueOf(' + value_time + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
*/
Blockly.Blocks['com_questetra_bpms_util_addabledate_after'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Boolean");
        this.appendValueInput("DateA")
            .setCheck(["com.questetra.bpms.util.AddableDate", "java.sql.Date", "java.util.Date"])
            .appendField("日付(AddableDate|Date)");
        this.appendDummyInput()
            .appendField("は");
        this.appendValueInput("DateB")
            .setCheck(["com.questetra.bpms.util.AddableDate", "java.sql.Date", "java.util.Date"])
            .appendField("日付(AddableDate|Date)");
        this.appendDummyInput()
            .appendField("より後");
        this.setInputsInline(false);
        this.setOutput(true, "Boolean");
        this.setColour(120);
        this.setTooltip('指定された日付より後にあるかどうかを判定します');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_util_addabledate_after'] = function(block) {
    var value_datea = Blockly.JavaScript.valueToCode(block, 'DateA', Blockly.JavaScript.ORDER_NONE);
    var value_dateb = Blockly.JavaScript.valueToCode(block, 'DateB', Blockly.JavaScript.ORDER_NONE);
    var code = value_datea + '.after(' + value_dateb + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['com_questetra_bpms_util_addabledate_before'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Boolean");
        this.appendValueInput("DateA")
            .setCheck(["com.questetra.bpms.util.AddableDate", "java.sql.Date", "java.util.Date"])
            .appendField("日付(AddableDate|Date)");
        this.appendDummyInput()
            .appendField("は");
        this.appendValueInput("DateB")
            .setCheck(["com.questetra.bpms.util.AddableDate", "java.sql.Date", "java.util.Date"])
            .appendField("日付(AddableDate|Date)");
        this.appendDummyInput()
            .appendField("より前");
        this.setInputsInline(false);
        this.setOutput(true, "Boolean");
        this.setColour(120);
        this.setTooltip('指定された日付より前にあるかどうかを判定します');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['com_questetra_bpms_util_addabledate_before'] = function(block) {
    var value_datea = Blockly.JavaScript.valueToCode(block, 'DateA', Blockly.JavaScript.ORDER_NONE);
    var value_dateb = Blockly.JavaScript.valueToCode(block, 'DateB', Blockly.JavaScript.ORDER_NONE);
    var code = value_datea + '.before(' + value_dateb + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



//

