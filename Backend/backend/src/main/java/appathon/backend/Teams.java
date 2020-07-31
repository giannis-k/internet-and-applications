package appathon.backend;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Teams { 
	private String Name; 
	private Integer Points; 
	private Integer Wins; 
	private Integer Draws;
	private Integer Losses; 
	private Integer goalsscored; 
	private Integer goalsconceded;

	public Teams() {
	}

	public Teams(String name, Integer points, Integer wins, Integer draws, Integer losses, Integer Goalsscored,
			Integer Goalsconceded) {
		super();
		Name = name;
		Points = points;
		Wins = wins;
		Draws = draws;
		Losses = losses;
		goalsscored = Goalsscored;
		goalsconceded = Goalsconceded;
	}

	@Id
	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public Integer getPoints() {
		return Points;
	}

	public void setPoints(Integer points) {
		Points = points;
	}

	public Integer getWins() {
		return Wins;
	}

	public void setWins(Integer wins) {
		Wins = wins;
	}

	public Integer getDraws() {
		return Draws;
	}

	public void setDraws(Integer draws) {
		Draws = draws;
	}

	public Integer getLosses() {
		return Losses;
	}

	public void setLosses(Integer losses) {
		Losses = losses;
	}

	public Integer getGoalsscored() {
		return goalsscored;
	}

	public void setGoalsscored(Integer Goalsscored) {
		goalsscored = Goalsscored;
	}

	public Integer getGoalsconceded() {
		return goalsconceded;
	}

	public void setGoalsconceded(Integer Goalsconceded) {
		goalsconceded = Goalsconceded;
	}

}
