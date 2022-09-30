import React, { useState } from "react";

const CreateMember = () => {
  const [memberInfo, setMemberInfo] = useState({});

  const handleMemberInput = (e) => {
    setMemberInfo({ ...memberInfo, [e.target.name]: e.target.value });
  };

  const previewPicture = (e) => {
    const imageHolder = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      imageHolder.src = reader.result;
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={memberInfo.name || ""}
          onChange={handleMemberInput}
        />
        <div>
          <label>Socials</label>
          <input
            type="text"
            name="facebook"
            value={memberInfo.facebook || ""}
            onChange={handleMemberInput}
          />
          <input
            type="text"
            name="twitter"
            value={memberInfo.twitter || ""}
            onChange={handleMemberInput}
          />
          <input
            type="text"
            name="twitch"
            value={memberInfo.twitch || ""}
            onChange={handleMemberInput}
          />
          <input
            type="text"
            name="instagram"
            value={memberInfo.instagram || ""}
            onChange={handleMemberInput}
          />
          <input
            type="text"
            name="youtube"
            value={memberInfo.youtube || ""}
            onChange={handleMemberInput}
          />
          <input
            type="text"
            name="tiktok"
            value={memberInfo.tiktok || ""}
            onChange={handleMemberInput}
          />
        </div>
        <input type="file" onChange={previewPicture} />
        <img src="" />
      </form>
    </div>
  );
};

export default CreateMember;
