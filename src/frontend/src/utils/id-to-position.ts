import { PositionProps, StateProps } from '../types/props';

export type ButtonID = 110 | 120 | 210 | 220 | 310 | 320 | 410 | 420;

export const buttonIDToProps: { [key in ButtonID]: StateProps } = {
  110: {
    left: 0.5,
    top: 48,
    rotation: 0,
  },
  120: {
    left: 0.5,
    top: 54,
    rotation: 0,
  },
  210: {
    left: 46.7,
    top: 94,
    rotation: 90,
  },
  220: {
    left: 52.5,
    top: 94,
    rotation: 90,
  },
  310: {
    left: 92.5,
    top: 48,
    rotation: 0,
  },
  320: {
    left: 92.5,
    top: 42,
    rotation: 0,
  },
  410: {
    left: 46.6,
    top: 2,
    rotation: 90,
  },
  420: {
    left: 40.7,
    top: 2,
    rotation: 90,
  },
};

export type TrafficLightId = 10 | 11 | 20 | 21 | 30 | 31 | 40 | 41;

export type ColorCode = 1 | 2;

export const colorCodeToString: { [key in ColorCode]: 'green' | 'red' } = {
  1: 'green',
  2: 'red',
};

export const trafficLightIdToPosition: { [key in TrafficLightId]: PositionProps } = {
  10: {
    left: 38.5,
    top: 47.5,
  },
  11: {
    left: 38.5,
    top: 53.5,
  },
  20: {
    left: 47.5,
    top: 56.5,
  },
  21: {
    top: 56.5,
    left: 53.5,
  },
  30: {
    left: 56.5,
    top: 47.5,
  },
  31: {
    left: 56.5,
    top: 41.5,
  },
  40: {
    left: 47.5,
    top: 38.5,
  },
  41: {
    left: 41.5,
    top: 38.5,
  },
};

export type StateId =
  | 100
  | 102
  | 104
  | 105
  | 110
  | 111
  | 112
  | 113
  | 114
  | 115
  | 120
  | 121
  | 122
  | 123
  | 124
  | 125
  | 130
  | 131
  | 140
  | 141
  | 150
  | 200
  | 202
  | 204
  | 205
  | 210
  | 211
  | 212
  | 213
  | 214
  | 215
  | 220
  | 221
  | 222
  | 223
  | 224
  | 225
  | 230
  | 231
  | 240
  | 241
  | 250
  | 300
  | 302
  | 304
  | 305
  | 310
  | 311
  | 312
  | 313
  | 314
  | 315
  | 320
  | 321
  | 322
  | 323
  | 324
  | 325
  | 330
  | 331
  | 340
  | 341
  | 350
  | 400
  | 402
  | 404
  | 405
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 420
  | 421
  | 422
  | 423
  | 424
  | 425
  | 430
  | 431
  | 440
  | 441
  | 450;

export const stateIdToProps: { [key in StateId]: StateProps } = {
  100: {
    left: -5.5,
    top: 41.5,
    rotation: 180,
  },
  102: {
    left: 8.5,
    top: 41.5,
    rotation: 180,
  },
  104: {
    left: 26.5,
    top: 41.5,
    rotation: 180,
  },
  105: {
    left: 34,
    top: 41.5,
    rotation: 180,
  },
  110: {
    left: -5.5,
    top: 47.5,
    rotation: 0,
  },
  111: {
    left: 0.5,
    top: 47.5,
    rotation: 0,
  },
  112: {
    left: 8.5,
    top: 47.5,
    rotation: 0,
  },
  113: {
    left: 18,
    top: 47.5,
    rotation: 0,
  },
  114: {
    left: 26.5,
    top: 47.5,
    rotation: 0,
  },
  115: {
    left: 34,
    top: 47.5,
    rotation: 0,
  },
  120: {
    left: -5.5,
    top: 53.5,
    rotation: 0,
  },
  121: {
    left: 0.5,
    top: 53.5,
    rotation: 0,
  },
  122: {
    left: 8.5,
    top: 53.5,
    rotation: 0,
  },
  123: {
    left: 18,
    top: 53.5,
    rotation: 0,
  },
  124: {
    left: 26.5,
    top: 53.5,
    rotation: 0,
  },
  125: {
    left: 34,
    top: 53.5,
    rotation: 0,
  },
  130: {
    left: 45.5,
    top: 47.5,
    rotation: 0,
  },
  131: {
    left: 52,
    top: 42,
    rotation: -60,
  },
  140: {
    left: 45.5,
    top: 53.5,
    rotation: 0,
  },
  141: {
    left: 52,
    top: 53.5,
    rotation: 0,
  },
  150: {
    left: 40,
    top: 54.5,
    rotation: 60,
  },
  200: {
    left: 42,
    top: 101,
    rotation: 90,
  },
  202: {
    left: 42,
    top: 86,
    rotation: 90,
  },
  204: {
    left: 42,
    top: 69,
    rotation: 90,
  },
  205: {
    left: 42,
    top: 60,
    rotation: 90,
  },
  210: {
    left: 47.5,
    top: 101,
    rotation: -90,
  },
  211: {
    left: 47.5,
    top: 94,
    rotation: -90,
  },
  212: {
    left: 47.5,
    top: 86,
    rotation: -90,
  },
  213: {
    left: 47.5,
    top: 77,
    rotation: -90,
  },
  214: {
    left: 47.5,
    top: 69,
    rotation: -90,
  },
  215: {
    left: 47.5,
    top: 60,
    rotation: -90,
  },
  220: {
    left: 53.5,
    top: 101,
    rotation: -90,
  },
  221: {
    left: 53.5,
    top: 94,
    rotation: -90,
  },
  222: {
    left: 53.5,
    top: 86,
    rotation: -90,
  },
  223: {
    left: 53.5,
    top: 77,
    rotation: -90,
  },
  224: {
    left: 53.5,
    top: 69,
    rotation: -90,
  },
  225: {
    left: 53.5,
    top: 60,
    rotation: -90,
  },
  230: {
    left: 47.5,
    top: 50,
    rotation: -90,
  },
  231: {
    left: 42.5,
    top: 44,
    rotation: -140,
  },
  240: {
    left: 53.5,
    top: 50,
    rotation: -90,
  },
  241: {
    left: 53.5,
    top: 43,
    rotation: -90,
  },
  250: {
    left: 54.5,
    top: 55,
    rotation: -45,
  },
  300: {
    left: 101,
    top: 53.5,
    rotation: 0,
  },
  302: {
    left: 87,
    top: 53.5,
    rotation: 0,
  },
  304: {
    left: 70,
    top: 53.5,
    rotation: 0,
  },
  305: {
    left: 62,
    top: 53.5,
    rotation: 0,
  },
  310: {
    left: 101,
    top: 47.5,
    rotation: 180,
  },
  311: {
    left: 94,
    top: 47.5,
    rotation: 180,
  },
  312: {
    left: 87,
    top: 47.5,
    rotation: 180,
  },
  313: {
    left: 77,
    top: 47.5,
    rotation: 180,
  },
  314: {
    left: 69,
    top: 47.5,
    rotation: 180,
  },
  315: {
    left: 60,
    top: 47.5,
    rotation: 180,
  },
  320: {
    left: 101,
    top: 41.5,
    rotation: 180,
  },
  321: {
    left: 94,
    top: 41.5,
    rotation: 180,
  },
  322: {
    left: 87,
    top: 41.5,
    rotation: 180,
  },
  323: {
    left: 77,
    top: 41.5,
    rotation: 180,
  },
  324: {
    left: 69,
    top: 41.5,
    rotation: 180,
  },
  325: {
    left: 60,
    top: 41.5,
    rotation: 180,
  },
  330: {
    left: 49,
    top: 47.5,
    rotation: 180,
  },
  331: {
    left: 43,
    top: 51.5,
    rotation: 130,
  },
  340: {
    left: 50,
    top: 41.5,
    rotation: 180,
  },
  341: {
    left: 43,
    top: 41.5,
    rotation: 180,
  },
  350: {
    left: 54.5,
    top: 40.5,
    rotation: 230,
  },

  400: {
    left: 53.5,
    top: -5,
    rotation: -90,
  },
  402: {
    left: 53.5,
    top: 9,
    rotation: -90,
  },
  404: {
    left: 53.5,
    top: 26,
    rotation: -90,
  },
  405: {
    left: 53.5,
    top: 35,
    rotation: -90,
  },
  410: {
    left: 47.5,
    top: -5,
    rotation: 90,
  },
  411: {
    left: 47.5,
    top: 2,
    rotation: 90,
  },
  412: {
    left: 47.5,
    top: 9,
    rotation: 90,
  },
  413: {
    left: 47.5,
    top: 18,
    rotation: 90,
  },
  414: {
    left: 47.5,
    top: 27,
    rotation: 90,
  },
  415: {
    left: 47.5,
    top: 35,
    rotation: 90,
  },
  420: {
    left: 41.5,
    top: -5,
    rotation: 90,
  },
  421: {
    left: 41.5,
    top: 1,
    rotation: 90,
  },
  422: {
    left: 41.5,
    top: 9,
    rotation: 90,
  },
  423: {
    left: 41.5,
    top: 17.5,
    rotation: 90,
  },
  424: {
    left: 41.5,
    top: 27,
    rotation: 90,
  },
  425: {
    left: 41.5,
    top: 35,
    rotation: 90,
  },
  430: {
    left: 47.5,
    top: 45,
    rotation: 90,
  },
  431: {
    left: 53.5,
    top: 52,
    rotation: 35,
  },
  440: {
    left: 41.5,
    top: 45,
    rotation: 90,
  },
  441: {
    left: 41.5,
    top: 52,
    rotation: 90,
  },
  450: {
    left: 40,
    top: 40,
    rotation: 130,
  },
};
