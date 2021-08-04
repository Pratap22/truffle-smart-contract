// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@0xcert/ethereum-erc721/src/contracts/tokens/nf-token-metadata.sol";
import "@0xcert/ethereum-erc721/src/contracts/ownership/ownable.sol";

contract Memetoon is NFTokenMetadata, Ownable {
    address payable public beneficiary = payable(address(0x3408F7D543569E6d803a7f2dB146AFca135D4002));
    uint constant public minMintValue = 100000000000000;

    constructor() public {
        nftName = "Memetoon NFT";
        nftSymbol = "MTC";
    }

    function mint(
        address _to,
        uint256 _tokenId,
        string calldata _uri
    ) public payable {

        require(
            msg.value < minMintValue,
            "Minting requires minimum."
        );

        super._mint(_to, _tokenId);
        super._setTokenUri(_tokenId, _uri);

        beneficiary.transfer(msg.value);
    }
}
