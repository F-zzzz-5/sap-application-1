sap.ui.define([
    "sap/ui/core/UIComponent"
  ], function(UIComponent) {
    "use strict";
  
    return UIComponent.extend("myapp.Component", {
      metadata: {
        manifest: "json"
      },
      init: function() {
        // Create SAPUI5 Table after fetching data
        const oTable = new sap.m.Table({
          columns: [
            new sap.m.Column({ header: new sap.m.Label({ text: "ID" }) }),
            new sap.m.Column({ header: new sap.m.Label({ text: "Request Name" }) }),
            // Add more columns here
          ]
        });

        records.forEach((record) => {
          oTable.addItem(new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: record.ID }),
              new sap.m.Text({ text: record.request_name }),
              // Add more cells here
            ]
          }));
        });

        oTable.placeAt("content");
        UIComponent.prototype.init.apply(this, arguments);
        this.getRouter().initialize();
        this.getRootControl().placeAt("content"); // Place app in 'content' div
      }

    });
  });
  