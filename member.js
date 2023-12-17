function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberValue = member.value;
    var skillsValue = skills.value;
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValue = skillsMemberValue + memberValue + skillsValue + ", ";
    skillsMember.value = skillsMemberValue;
    member.value = "";
    skills.value = "";
}