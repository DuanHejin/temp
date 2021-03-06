(function() {

    var check = function(params) {
        // check jquery
        if (!$ || !jQuery) {
            console.error("you should import this plugin after jquery!");
            return false;
        }
        var preParamsNames = ["dataList", "metaData", "targetId", "renderRow"],
            keys = Object.keys(params);
        // check include property
        preParamsNames.forEach(function(paramName) {
            if (keys.indexOf(paramName) === -1) {
                console.error("property " + paramName + " is not defined!");
                return false;
            }
        });
        if (!params.dataList || !params.dataList instanceof Array) {
            console.error("property dataList is not an array!");
            return false;
        }
        return true;
    }

    // define global variable
    var DATA_LIST, META_DATA, TARGET_DOM, RENDER_ROW_FUNC;
 
    var renderTargetDom = function (nodes) {
        TARGET_DOM.append(nodes);
    }

    var renderList = function() {
        TARGET_DOM.empty();
        var nodes = "";
        DATA_LIST.forEach(function(row, index) {
            nodes += renderRow(row, index);
        });
        renderTargetDom(nodes);
    };

    var renderRow = function(row, index) {
        return RENDER_ROW_FUNC(row, index);
    };

    var addRow = function() {
        var newObj = JSON.parse(JSON.stringify(META_DATA));
        DATA_LIST.push(newObj);
        renderList();
    };

    var deleteRow = function(index) {
        DATA_LIST.splice(index, 1);
        renderList();
    };

    var handleChange = function(event) {
        var propertyName = event.name,
            value = event.value;
        var name = propertyName.split("_")[0],
            index = propertyName.split("_")[1];
        DATA_LIST[index][name] = value;
    };


    var init = function(params) {
        // check property
        if (!check(params)) return;
        // init global variable
        DATA_LIST = params.dataList,
        META_DATA = params.metaData,
        TARGET_DOM = $("#" + params.targetId) || jQuery("#" + params.targetId),
        RENDER_ROW_FUNC = params.renderRow;
        // render list
        renderList();
    }

    var dynamicTable = {
        init: init,
        renderList: renderList,
        addRow: addRow,
        deleteRow: deleteRow,
        handleChange: handleChange
    };

    window.dynamicTable = dynamicTable;

    return dynamicTable;
    
})();