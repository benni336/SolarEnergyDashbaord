{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "fiscalYearStartMonth": 0,
  "graphTooltip": 0,
  "id": 5,
  "links": [],
  "liveNow": false,
  "panels": [
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "red",
                "value": null
              },
              {
                "color": "green",
                "value": 0
              }
            ]
          },
          "unit": "watt"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 5,
        "x": 0,
        "y": 0
      },
      "id": 39,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\" and (r[\"_field\"] == \"export_power\"))\n  |> map(fn: (r) => ({ r with _value: if r._value >= 32767.0 then r._value-65534.0 else r._value}))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)  \n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "title": "Überschuss 84",
      "type": "stat"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "red",
                "value": null
              },
              {
                "color": "green",
                "value": 0
              }
            ]
          },
          "unit": "watt"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 5,
        "x": 5,
        "y": 0
      },
      "id": 42,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\" and r[\"_field\"] == \"export_power\")\n  |> map(fn: (r) => ({ r with _value: if r._value >= 32767.0 then r._value-65534.0 else r._value}))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)  \n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "title": "Überschuss 82",
      "type": "stat"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 1,
          "mappings": [],
          "max": 100,
          "min": 0,
          "noValue": "?",
          "thresholds": {
            "mode": "percentage",
            "steps": [
              {
                "color": "red",
                "value": null
              },
              {
                "color": "#EAB839",
                "value": 5
              },
              {
                "color": "green",
                "value": 20
              },
              {
                "color": "orange",
                "value": 90
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 10,
        "y": 0
      },
      "id": 4,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "center",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "values": false
        },
        "text": {},
        "textMode": "value"
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_field\"] == \"battery_level\")\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> aggregateWindow(fn:mean, every:5m)\n  |> yield(name: \"Batteriestand\")",
          "refId": "A"
        }
      ],
      "title": "Batteriestand",
      "type": "stat"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "blue",
                "value": null
              },
              {
                "color": "green",
                "value": 45
              },
              {
                "color": "semi-dark-orange",
                "value": 60
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "celsius"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 14,
        "y": 0
      },
      "id": 41,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "lastNotNull"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_field\"] == \"temp1\")\n  |> filter(fn: (r) => r[\"device\"] == \"acthor1\")\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"Batteriestand\")",
          "refId": "A"
        }
      ],
      "title": "WW-Tank",
      "type": "stat"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 7
      },
      "id": 31,
      "panels": [],
      "title": "Batterie",
      "type": "row"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 0.1
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 3,
        "x": 0,
        "y": 8
      },
      "id": 12,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "sum"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": false,
          "query": "import \"math\"\n\nfrom(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\" and (r[\"_field\"] == \"daily_charge_energy\" or r[\"_field\"] == \"daily_battery_charge_from_pv\" ))\n  |> derivative(unit:1h)\n  |> aggregateWindow(fn:mean, every:5m)\n  |> pivot(\n    rowKey:[\"_time\"],\n    columnKey: [\"_field\"],\n    valueColumn: \"_value\"\n    )\n//  |> difference(nonNegative: true, columns: [\"daily_charge_energy\",\"daily_battery_charge_from_pv\"])\n |> map(fn: (r) => ({ _time: r._time,\n                      _value: if r.daily_battery_charge_from_pv >= 0.0 and r.daily_charge_energy>= 0.0 and r.daily_battery_charge_from_pv+0.01 < r.daily_charge_energy \n                               // then 0.1*math.round(x:10.0*(r.daily_battery_charge_from_pv - r.daily_charge_energy))\n                                then (r.daily_charge_energy-r.daily_battery_charge_from_pv)*5.0/60.0\n                                else 0.0\n                                }))\n  |> yield(name: \"_result\")",
          "refId": "B"
        }
      ],
      "title": "Battery Grid Charge",
      "type": "stat"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "decimals": 1,
          "mappings": [],
          "max": 100,
          "min": 0,
          "noValue": "?",
          "thresholds": {
            "mode": "percentage",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "yellow",
                "value": 0.01
              },
              {
                "color": "orange",
                "value": 8
              },
              {
                "color": "red",
                "value": 10
              }
            ]
          },
          "unit": "percent"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 3,
        "x": 3,
        "y": 8
      },
      "id": 16,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "center",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "text": {},
        "textMode": "value"
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_field\"] == \"battery_level\")\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> derivative( unit: 1h, nonNegative: false, columns: [\"_value\"], timeColumn: \"_time\")\n  |> aggregateWindow(every:10m, fn:mean, createEmpty:false)\n  |> map(fn: (r) => ({ r with _value: r._value*-1.0}))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"Batteriestand\")\n",
          "refId": "A"
        },
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": true,
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_field\"] == \"battery_level\")\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> first()",
          "refId": "B"
        },
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": true,
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_field\"] == \"battery_level\")\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> last()",
          "refId": "C"
        },
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": true,
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"_field\"] == \"battery_level\")\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> aggregateWindow(fn:mean, every:5m)\n  |> yield(name: \"Batteriestand\")",
          "refId": "D"
        }
      ],
      "timeFrom": "30m",
      "title": "Entladungsrate/h",
      "transformations": [],
      "type": "stat"
    },
    {
      "description": "",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "left",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 0,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "noValue": "-",
          "thresholds": {
            "mode": "percentage",
            "steps": [
              {
                "color": "red",
                "value": null
              },
              {
                "color": "#EAB839",
                "value": 15
              },
              {
                "color": "green",
                "value": 30
              },
              {
                "color": "orange",
                "value": 90
              }
            ]
          },
          "unit": "watt"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 5,
        "x": 6,
        "y": 8
      },
      "id": 14,
      "options": {
        "legend": {
          "calcs": [
            "sum"
          ],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"daily_battery_charge_from_pv\" or r[\"_field\"] == \"daily_battery_discharge_energy\")\n  |> map(fn: (r) => ({ r with _value: if r[\"_field\"] == \"daily_battery_discharge_energy\" then -1.0*r._value else 1.0*r._value}))\n  |> derivative(unit:1h)\n  |> aggregateWindow(fn:sum, every:15m)\n  |> map(fn: (r) => ({ r with _value: r._value*15.0/60.0*100.0}))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"Batteriestand\")",
          "refId": "A"
        }
      ],
      "title": "Be-/Entladung",
      "transformations": [
        {
          "id": "seriesToColumns",
          "options": {
            "byField": "Time"
          }
        },
        {
          "id": "organize",
          "options": {
            "excludeByName": {},
            "indexByName": {},
            "renameByName": {
              "daily_battery_charge_from_pv {inverter=\"SH80RT\", name=\"measure1\"}": "Laden",
              "daily_battery_discharge_energy {inverter=\"SH80RT\", name=\"measure1\"}": "Entladen"
            }
          }
        }
      ],
      "type": "timeseries"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "thresholds"
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "red",
                "value": null
              },
              {
                "color": "green",
                "value": 1
              }
            ]
          },
          "unit": "currencyEUR"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 9,
        "x": 11,
        "y": 8
      },
      "id": 44,
      "options": {
        "colorMode": "value",
        "graphMode": "area",
        "justifyMode": "auto",
        "orientation": "auto",
        "reduceOptions": {
          "calcs": [
            "sum"
          ],
          "fields": "",
          "values": false
        },
        "textMode": "auto"
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => (r[\"inverter\"] == \"SH10RT\") and (r[\"_field\"] == \"daily_import_energy\" or r[\"_field\"] == \"daily_export_energy\")) //r[\"inverter\"] == \"SH80RT\" or \n  |> aggregateWindow(every:1d, fn:max, createEmpty:false)\n  |> pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\")\n  |> map(fn: (r) => ({ _time: r._time,\n                      Haus82: r.daily_export_energy*0.0653-0.5-r.daily_import_energy*0.3 }))\n  |> yield(name: \"_result\")",
          "refId": "Haus 82"
        },
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": false,
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => (r[\"inverter\"] == \"SH80RT\") and (r[\"_field\"] == \"daily_import_energy\" or r[\"_field\"] == \"daily_export_energy\")) //r[\"inverter\"] == \"SH80RT\" or \n  |> aggregateWindow(every:1d, fn:max, createEmpty:false)\n  |> pivot(rowKey: [\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\")\n  |> map(fn: (r) => ({ _time: r._time,\n                      Haus84: r.daily_export_energy*0.0693-0.5-r.daily_import_energy*0.3 }))\n  |> yield(name: \"_result\")",
          "refId": "Haus 84"
        }
      ],
      "timeFrom": "30d",
      "title": "Panel Title",
      "type": "stat"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 15
      },
      "id": 25,
      "panels": [],
      "title": "Haus 84",
      "type": "row"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "smooth",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          },
          "unit": "locale"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 12,
        "w": 8,
        "x": 0,
        "y": 16
      },
      "id": 10,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\" and (r[\"_field\"] == \"total_dc_power\" or r[\"_field\"] == \"load_power\" or r[\"_field\"] == \"battery_power\" or r[\"_field\"] == \"export_power\"))\n  |> map(fn: (r) => ({ r with _value: if r._value >= 32767.0 then r._value-65534.0 else r._value}))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)  \n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "title": "Haus 84 aktuell",
      "type": "timeseries"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "smooth",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byFrameRefID",
              "options": "A"
            },
            "properties": [
              {
                "id": "custom.stacking",
                "value": {
                  "group": "A",
                  "mode": "none"
                }
              },
              {
                "id": "custom.fillOpacity",
                "value": 0
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 12,
        "w": 7,
        "x": 8,
        "y": 16
      },
      "id": 13,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": false,
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\" and (r[\"_field\"] == \"daily_import_energy\" or r[\"_field\"] == \"daily_export_energy\" or r[\"_field\"] == \"daily_pv_generation\" or r[\"_field\"] == \"daily_home_load\" or r[\"_field\"] == \"daily_pv_generation\" or r[\"_field\"] == \"daily_battery_discharge_energy\"  or r[\"_field\"] == \"daily_battery_charge_from_pv\" ))\n|> aggregateWindow(every:5m, fn:mean, createEmpty:false)\n|> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"_result\")\n\n// |> map( fn: (r) => ({ r with _value: if r._field == \"daily_import_energy\" then -1.0*r._value \n//                              else if r._field == \"daily_battery_discharge_energy\" then -1.0*r._value\n//                              else if r._field == \"daily_home_load\" then -1.0*r._value\n//                              else r._value }))",
          "refId": "B"
        }
      ],
      "timeShift": "1h",
      "title": "Haus 84 Bilanz",
      "transformations": [],
      "type": "timeseries"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "smooth",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          },
          "unit": "locale"
        },
        "overrides": [
          {
            "matcher": {
              "id": "byRegexp",
              "options": "mppt_._current.*"
            },
            "properties": [
              {
                "id": "custom.axisPlacement",
                "value": "right"
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 12,
        "w": 8,
        "x": 15,
        "y": 16
      },
      "id": 34,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\" and (r[\"_field\"] == \"mppt_1_current\" or r[\"_field\"] == \"mppt_1_voltage\" or r[\"_field\"] == \"mppt_2_current\" or r[\"_field\"] == \"mppt_2_voltage\"))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "title": "Haus 84 MPPT",
      "type": "timeseries"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 28
      },
      "id": 37,
      "panels": [],
      "title": "Haus 82",
      "type": "row"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "smooth",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          },
          "unit": "locale"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 12,
        "w": 8,
        "x": 0,
        "y": 29
      },
      "id": 9,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\" and (r[\"_field\"] == \"total_dc_power\" or r[\"_field\"] == \"load_power\" or r[\"_field\"] == \"battery_power\" or r[\"_field\"] == \"export_power\"))\n  |> map(fn: (r) => ({ r with _value: if r._value >= 32767.0 then r._value-65534.0 else r._value}))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "title": "Haus 82 aktuell",
      "type": "timeseries"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "smooth",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": 3600000,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byFrameRefID",
              "options": "A"
            },
            "properties": [
              {
                "id": "custom.stacking",
                "value": {
                  "group": "A",
                  "mode": "none"
                }
              },
              {
                "id": "custom.fillOpacity",
                "value": 0
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 12,
        "w": 7,
        "x": 8,
        "y": 29
      },
      "id": 15,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": false,
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\" and (r[\"_field\"] == \"daily_import_energy\" or r[\"_field\"] == \"daily_export_energy\" or r[\"_field\"] == \"daily_pv_generation\" or r[\"_field\"] == \"daily_home_load\" or r[\"_field\"] == \"daily_pv_generation\"))\n  |> aggregateWindow(every:5m, fn:mean, createEmpty:false)\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"_result\")\n\n// |> map( fn: (r) => ({ r with _value: if r._field == \"daily_import_energy\" then -1.0*r._value \n//                              else if r._field == \"daily_battery_discharge_energy\" then -1.0*r._value\n//                              else if r._field == \"daily_home_load\" then -1.0*r._value\n//                              else r._value }))",
          "refId": "B"
        },
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "hide": true,
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: -2d, stop: now())\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\" and (r[\"_field\"] == \"daily_home_load\" ))\n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "timeShift": "1h",
      "title": "Haus 82 Bilanz",
      "transformations": [],
      "type": "timeseries"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "smooth",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              }
            ]
          },
          "unit": "locale"
        },
        "overrides": [
          {
            "matcher": {
              "id": "byRegexp",
              "options": "mppt_._current.*"
            },
            "properties": [
              {
                "id": "custom.axisPlacement",
                "value": "right"
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 12,
        "w": 8,
        "x": 15,
        "y": 29
      },
      "id": 35,
      "options": {
        "legend": {
          "calcs": [
            "lastNotNull"
          ],
          "displayMode": "table",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\" and (r[\"_field\"] == \"mppt_1_current\" or r[\"_field\"] == \"mppt_1_voltage\" or r[\"_field\"] == \"mppt_2_current\" or r[\"_field\"] == \"mppt_2_voltage\"))\n  |> aggregateWindow(every:v.windowPeriod, fn:mean, createEmpty:false)\n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "title": "Haus 82 MPPT",
      "type": "timeseries"
    },
    {
      "collapsed": false,
      "gridPos": {
        "h": 1,
        "w": 24,
        "x": 0,
        "y": 41
      },
      "id": 18,
      "panels": [],
      "title": "Übersicht",
      "type": "row"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 0,
        "y": 42
      },
      "id": 22,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"daily_direct_energy_consumption\" or\n                 r[\"_field\"] == \"daily_battery_discharge_energy\" or\n                 r[\"_field\"]== \"daily_import_energy\")\n  |> aggregateWindow(fn:max, every: 1d)\n  |> yield()",
          "refId": "A"
        }
      ],
      "title": "Energiemix 82",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 4,
        "y": 42
      },
      "id": 27,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"daily_direct_energy_consumption\" or\n                 r[\"_field\"] == \"daily_battery_discharge_energy\" or\n                 r[\"_field\"]== \"daily_import_energy\")\n  |> aggregateWindow(fn:max, every: 1d)\n  |> yield()",
          "refId": "A"
        }
      ],
      "title": "EnergieMix 84",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "bars",
            "fillOpacity": 17,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 4,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "off"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          }
        },
        "overrides": []
      },
      "gridPos": {
        "h": 8,
        "w": 7,
        "x": 8,
        "y": 42
      },
      "hideTimeOverride": false,
      "id": 6,
      "options": {
        "legend": {
          "calcs": [
            "max"
          ],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "import \"timezone\"\n\noption location = timezone.fixed(offset: 1h)\n\nfrom(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\" or r[\"inverter\"] == \"SH80RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"daily_pv_generation\")\n  |> aggregateWindow(every: 1d, fn: max)\n  |> timeShift(columns: [\"_time\"], duration: -11h)\n  |> yield()",
          "refId": "SH8.0RT"
        }
      ],
      "timeFrom": "30d",
      "title": "Monatsproduktion",
      "type": "timeseries"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 15,
        "y": 42
      },
      "id": 26,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"daily_direct_energy_consumption\" or\n                 r[\"_field\"] == \"daily_export_from_pv\" or\n                 r[\"_field\"]== \"daily_battery_charge_from_pv\")         \n  |> aggregateWindow(fn:max, every: 1d)\n  |> yield()",
          "refId": "A"
        }
      ],
      "title": "EnergieNutzung 82",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 19,
        "y": 42
      },
      "id": 20,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "mean"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"daily_direct_energy_consumption\" or\n                 r[\"_field\"] == \"daily_export_from_pv\" or\n                 r[\"_field\"]== \"daily_battery_charge_from_pv\")         \n  |> aggregateWindow(fn:max, every: 1d)\n  |> yield()",
          "refId": "A"
        }
      ],
      "title": "EnergieNutzung 84",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 0,
        "y": 49
      },
      "id": 23,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"total_direct_energy_consumption\" or\n                 r[\"_field\"] == \"total_battery_discharge_energy\" or\n                 r[\"_field\"]== \"total_import_energy\")\n  |> last()\n\n  ",
          "refId": "A"
        }
      ],
      "title": "Energiemix 82 total",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 4,
        "y": 49
      },
      "id": 21,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"total_direct_energy_consumption\" or\n                 r[\"_field\"] == \"total_battery_discharge_energy\" or\n                 r[\"_field\"]== \"total_import_energy\")\n  |> last()",
          "refId": "A"
        }
      ],
      "title": "Energiemix 84 total",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 15,
        "y": 49
      },
      "id": 28,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH10RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"total_direct_energy_consumption\" or\n                 r[\"_field\"] == \"total_export_from_pv\" or\n                 r[\"_field\"]== \"total_battery_charge_from_pv\")         \n  |> last()",
          "refId": "A"
        }
      ],
      "title": "EnergieNutzung 82 total",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            }
          },
          "mappings": []
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 19,
        "y": 49
      },
      "id": 29,
      "options": {
        "legend": {
          "displayMode": "list",
          "placement": "bottom"
        },
        "pieType": "pie",
        "reduceOptions": {
          "calcs": [
            "last"
          ],
          "fields": "",
          "values": false
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "pluginVersion": "8.3.4",
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => r[\"inverter\"] == \"SH80RT\")\n  |> filter(fn: (r) => r[\"_field\"] == \"total_direct_energy_consumption\" or\n                 r[\"_field\"] == \"total_export_from_pv\" or\n                 r[\"_field\"]== \"total_battery_charge_from_pv\")         \n  |> last()",
          "refId": "A"
        }
      ],
      "title": "EnergieNutzung 84 total",
      "transformations": [
        {
          "id": "merge",
          "options": {}
        }
      ],
      "type": "piechart"
    },
    {
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic",
            "seriesBy": "max"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 0,
            "gradientMode": "none",
            "hideFrom": {
              "legend": false,
              "tooltip": false,
              "viz": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": false,
            "stacking": {
              "group": "A",
              "mode": "none"
            },
            "thresholdsStyle": {
              "mode": "line"
            }
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "#EAB839",
                "value": 1
              },
              {
                "color": "red",
                "value": 5
              }
            ]
          }
        },
        "overrides": [
          {
            "matcher": {
              "id": "byName",
              "options": "daily_import_energy SH10RT"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "orange",
                  "mode": "fixed"
                }
              }
            ]
          },
          {
            "matcher": {
              "id": "byName",
              "options": "daily_import_energy SH80RT"
            },
            "properties": [
              {
                "id": "color",
                "value": {
                  "fixedColor": "blue",
                  "mode": "fixed"
                }
              }
            ]
          }
        ]
      },
      "gridPos": {
        "h": 6,
        "w": 7,
        "x": 8,
        "y": 50
      },
      "id": 33,
      "options": {
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltip": {
          "mode": "single"
        }
      },
      "targets": [
        {
          "datasource": {
            "type": "influxdb",
            "uid": "qVCDRwxnz"
          },
          "query": "from(bucket: \"inverter_franzsester\")\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |> filter(fn: (r) => (r[\"inverter\"] == \"SH80RT\" or r[\"inverter\"] == \"SH10RT\") and r[\"_field\"] == \"daily_import_energy\")\n  |> aggregateWindow(every:1d, fn:max, createEmpty:false)\n  |> yield(name: \"_result\")",
          "refId": "A"
        }
      ],
      "timeFrom": "30d",
      "title": "Panel Title",
      "type": "timeseries"
    }
  ],
  "refresh": "1m",
  "schemaVersion": 34,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {
    "hidden": false
  },
  "timezone": "",
  "title": "Solar Energy",
  "uid": "dJOV0Gbnk",
  "version": 38,
  "weekStart": ""
}
