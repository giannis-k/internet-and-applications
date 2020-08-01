package appathon.backend;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Players {
	private String Name;
	private String Position;
	private String Team;
	private Integer Appearances;
	private Integer Goals;
	private Integer Assists;
	private Integer Cards;
	private Integer yellowcards;
	private Integer redcards;

	public Players() {
	}

	public Players(String name, String position, String team, Integer appearances, Integer goals, Integer assists,
			Integer cards, Integer Yellowcards, Integer Redcards) {
		super();
		Name = name;
		Position = position;
		Team = team;
		Appearances = appearances;
		Goals = goals;
		Assists = assists;
		Cards = cards;
		yellowcards = Yellowcards;
		redcards = Redcards;
	}

	@Id
	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getPosition() {
		return Position;
	}

	public void setPosition(String position) {
		Position = position;
	}

	public String getTeam() {
		return Team;
	}

	public void setTeam(String team) {
		Team = team;
	}

	public Integer getAppearances() {
		return Appearances;
	}

	public void setAppearances(Integer appearances) {
		Appearances = appearances;
	}

	public Integer getGoals() {
		return Goals;
	}

	public void setGoals(Integer goals) {
		Goals = goals;
	}

	public Integer getAssists() {
		return Assists;
	}

	public void setAssists(Integer assists) {
		Assists = assists;
	}

	public Integer getCards() {
		return Cards;
	}

	public void setCards(Integer cards) {
		Cards = cards;
	}

	public Integer getYellowcards() {
		return yellowcards;
	}

	public void setYellowcards(Integer Yellowcards) {
		yellowcards = Yellowcards;
	}

	public Integer getRedcards() {
		return redcards;
	}

	public void setRedcards(Integer Redcards) {
		redcards = Redcards;
	}

}
