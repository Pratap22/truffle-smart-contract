// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@0xcert/ethereum-erc721/src/contracts/tokens/nf-token-metadata.sol";
import "@0xcert/ethereum-erc721/src/contracts/ownership/ownable.sol";

contract Memetoon is NFTokenMetadata, Ownable {
    constructor() public {
        nftName = "Memetoon NFT";
        nftSymbol = "MTC";
    }

    function mint(
        address _to,
        uint256 _tokenId,
        string calldata _uri
    ) external {
        super._mint(_to, _tokenId);
        super._setTokenUri(_tokenId, _uri);
    }
}
