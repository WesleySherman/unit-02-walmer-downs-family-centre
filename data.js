var APP_DATA = {
  "scenes": [
    {
      "id": "0-01---front-of-unit",
      "name": "01 - Front of Unit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.5902402458677498,
        "pitch": -0.004351049357497416,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": 2.3429071203734564,
          "pitch": 0.36688724677280504,
          "rotation": 0.7853981633974483,
          "target": "1-02---reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02---reception",
      "name": "02 - Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.9633705320519095,
        "pitch": 0.10027579336111003,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": -2.631976179693769,
          "pitch": 0.382558112984972,
          "rotation": 5.497787143782138,
          "target": "0-01---front-of-unit"
        },
        {
          "yaw": 0.274682675370828,
          "pitch": 0.39940457454880374,
          "rotation": 5.497787143782138,
          "target": "2-03---back-office-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03---back-office-01",
      "name": "03 - Back Office 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.9721863756452507,
        "pitch": 0.13026222782899666,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": -1.1283064495801227,
          "pitch": 0.23026331786449283,
          "rotation": 0,
          "target": "3-04---back-office-02"
        },
        {
          "yaw": 0.5345017971503072,
          "pitch": 0.34909727909159294,
          "rotation": 4.71238898038469,
          "target": "5-06---bathroom"
        },
        {
          "yaw": -3.1126571844370314,
          "pitch": 0.45277195105018997,
          "rotation": 0.7853981633974483,
          "target": "1-02---reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04---back-office-02",
      "name": "04 - Back Office 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 2.9369803390549087,
        "pitch": 0.01274478990186978,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": 2.8750177482652592,
          "pitch": 0.2340456309907175,
          "rotation": 0,
          "target": "2-03---back-office-01"
        },
        {
          "yaw": -0.49438501955213,
          "pitch": 0.3431513510373847,
          "rotation": 0,
          "target": "4-05---back-office-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05---back-office-03",
      "name": "05 - Back Office 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.105607157890125,
        "pitch": -0.04241231357738684,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": 1.5319820599700495,
          "pitch": 0.3240434772027232,
          "rotation": 0,
          "target": "3-04---back-office-02"
        },
        {
          "yaw": 1.583230481915443,
          "pitch": 0.11715686062183828,
          "rotation": 0,
          "target": "2-03---back-office-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06---bathroom",
      "name": "06 - Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.09651017801996353,
        "pitch": 0.47047474074478757,
        "fov": 1.352045691493442
      },
      "linkHotspots": [
        {
          "yaw": 2.856848488716664,
          "pitch": 0.44212263903297355,
          "rotation": 1.5707963267948966,
          "target": "2-03---back-office-01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Unit 02, Walmer Downs Family Centre",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
