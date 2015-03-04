//Decrypt message using OpenPGP.js
function decrypt_message(privkey, passphrase, encoded_message) {
	jQuery("#keyerror").addClass("hide");
    var openpgp = window.openpgp;
    var privKeys = openpgp.key.readArmored(privkey);
    var privKey = privKeys.keys[0];
    if(!privKey) {
    	jQuery("#keyerror").removeClass("hide");
    	jQuery("#keyerror").html("Error: your private key is wrong.");
    	return "";
    }
    var success = privKey.decrypt(passphrase);
    if(!success) {
    	jQuery("#keyerror").removeClass("hide");
    	jQuery("#keyerror").html("Error: your passphrase is wrong.");
    	return "";
    }
    var message = openpgp.message.readArmored(encoded_message);
    var decrypted = openpgp.decryptMessage(privKey, message);
    return decrypted;
}
