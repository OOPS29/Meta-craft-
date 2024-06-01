// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, about) {
    const nft = {
        name: name,
        artist: artist,
        year: year,
        about: about
    };
    nfts.push(nft);
}

// Step 3: Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Year: ${nft.year}`);
        console.log(`About: ${nft.about}`);
        console.log(''); // Adding a blank line for better readability
    });
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total Supply: ${nfts.length}`);
}

// Call your functions below this line
mintNFT("Digital Landscape", "Priyanshu", 2022, "A big digital landscape.");
mintNFT("Modern Art", "Raj", 2023, "A piece of modern art.");
mintNFT("Portrait", "Carry", 2023, "A detailed portrait of a person.");

listNFTs();
getTotalSupply();
