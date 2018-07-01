package main


import (
  "flag"
  "fmt"
  "github.com/NebulousLabs/Sia/node/api/client"
)

func printBlockchainHeight(client *client.Client) {
  resposta, err := client.ConsensusGet()
  if err != nil {
    fmt.Printf("Error al obtenir el consensus: %s\n", err)
    return
  }
  fmt.Printf("Height: %d\n", resposta.Height)
}

func printWalletBalance(client *client.Client) {
  wg, err := client.WalletGet()
  if err != nil {
    fmt.Printf("Error al obtenir el wallet: %s\n", err)
    return
  }
  fmt.Printf("Siacoin balance: %s\n",
       wg.ConfirmedSiacoinBalance.HumanString())
}

func printBlockByHeight(client *client.Client) {
  cg, err := client.ConsensusBlocksHeightGet(161222)
  if err != nil {
    fmt.Printf("Error al obtenir el consensus: %s\n", err)
    return
  }
  fmt.Printf("Block: \n", cg)
}

func main() {
  address := flag.String("address", "localhost:9980","@ and port del node de Sia")
  client := client.New(*address)
  printBlockchainHeight(client)
  printWalletBalance(client)
  printBlockByHeight(client)
}
