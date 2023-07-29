# React Online Calcerror

對於資料科學的數值型預測任務，我們通常會使用評估指標來衡量模型的績效。然而，縱使我們使用相同的指標，根據資料處理或計算方式的不同，結果也可能會有所差異

這個工具是我的課餘專案，作為 BDRC 實驗室團隊的成員，我希望透過這個工具，讓團隊成員使用相同的方式計算評估指標，使結果可以被比較

![image](./image/preview.jpg?raw=true)

[TOC]

## Usage

您有 2 種方式可以輸入資料，以進行誤差計算

1. 在 Real Answer 與 Predictive Value 區塊下方的文字表單，分別手動輸入真實答案與預測值，每筆資料請以換行分隔

2. 在 Real Answer 與 Predictive Value 區塊下方的檔案表單，分別上傳包含真實答案與預測值的 CSV 檔案，CSV 檔案格式範例可以參考 [template.csv](/public/template/template-pred.csv)

備註：答案和預測值的數量必須相等才能計算，若遇到缺值或異常值的情形，會將該筆資料（相同筆的答案及預測值）自計算排除

備註：對於初次使用，您可以使用 [template-real.csv](/public/template/template-real.csv) 與 [template-pred.csv](/public/template/template-pred.csv) 來進行測試

## Development

對於開發環境，請參考下列說明來設定與啟動服務

### Install Dependencies

在本地端的 `node_modules` 資料夾裡面安裝相依套件

```sh
$ npm ci
```

### Development Server

啟動基於 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) 的開發伺服器，並且支援 Hot-Module-Replacement (HMR)，所有對程式碼的更動都會即時反映在瀏覽器，使用瀏覽器開啟 http://localhost:3000 即可瀏覽頁面

```sh
$ npm run start
```

### Build

編譯前端程式碼，並存放於 `build` 資料夾，編譯後的檔案更小，並且不需要動態伺服器也可以運作

```sh
$ npm run build
```

您可以將 `build` 資料夾裡面的檔案更新至 `docs` 資料夾，並且將 `docs` 資料夾設定為 GitHub Pages 的根目錄，這樣就可以透過 GitHub Pages 來提供服務

## Metrics

![image](./image/MAPE.jpg?raw=true)

![image](./image/nRMSE.jpg?raw=true)
